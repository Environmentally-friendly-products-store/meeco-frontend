import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Footer from '../Footer/Footer';
import MainProductPage from '../MainProductPage/MainProductPage';
import Delivery from '../Delivery/Delivery';
import useScrollToTop from '../../hooks/useScrollToTop';
import AboutUs from '../AboutUs/AboutUs';
import Order from '../Order/Order';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

import ThanksForOrder from '../ThanksForOrder/ThanksForOrder';

import Profile from '../Profile/Profile';
import Contacts from '../Contacts/Contacts';
import {
  addCardToShoppingCart,
  changeAmountCardToShoppingCart,
  deleteCardFromShoppingCart,
  getCurrentCard,
} from '../../utils/productPageApi';
import { authorize, getUserProfile, register } from '../../utils/userApi.js';
import {
  getLocalStorageToken,
  removeLocalStorageToken,
  setLocalStorageToken,
} from '../../utils/localStorage';
import TopScrollBtn from '../TopScrollBtn/TopScrollBtn';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import { ProductsContext } from '../../contexts/ProductsContext';
import {
  addProductToShoppingCart,
  changeProductQuantityInShoppingCart,
  deleteProductFromShoppingCart,
  getNovelties,
  getPopularProducts,
  getShoppingCart,
} from '../../utils/productsApi';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { IsCatalogButtonClickedContext } from '../../contexts/IsCatalogButtonClickedContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

export default function App() {
  const navigate = useRef(useNavigate());

  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useScrollToTop();

  const handleRegistrationPopupOpen = () =>
    setIsRegistrationPopupOpen(!isRegistrationPopupOpen);
  const handleClosePopup = () => {
    setIsLoginPopupOpen(false);
    setIsRegistrationPopupOpen(false);
    setIsConfirmPopupOpen(false);
  };
  const closePopupByOverlay = (event) => {
    if (event.target.classList.contains('popup_active')) {
      handleClosePopup();
    }
  };

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const handleLoginPopup = () => setIsLoginPopupOpen(!isLoginPopupOpen);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const handleConfirmPopup = () => setIsConfirmPopupOpen(!isConfirmPopupOpen);

  const [selectedCard, setSelectedCard] = useState([]);
  const handleCardClick = (id) => {
    setSelectedCard({});
    if (isLoggedIn) {
      getCurrentCard(id, token)
        .then((product) => setSelectedCard(product))
        .catch((err) => console.log(err));
    } else {
      getCurrentCard(id)
        .then((product) => setSelectedCard(product))
        .catch((err) => console.log(err));
    }
  };

  const addProduct = (card) => {
    if (!isLoggedIn) {
      handleLoginPopup();
      return;
    } else {
      addCardToShoppingCart(card.id, token)
        .then((res) => {
          setSelectedCard((prev) => {
            const updatedCard = { ...prev, ...res };
            localStorage.setItem('cardPage', JSON.stringify(updatedCard));
            return updatedCard;
          });
        })
        .then(() => getShoppingCart(token))
        .then(setShoppingCart)
        .catch((err) => console.log(err));
    }
  };

  const deleteProduct = (card) => {
    deleteCardFromShoppingCart(card.id, token)
      .then(() =>
        setSelectedCard((product) => {
          product.amount = 0;
          product.is_in_shopping_cart = false;
          localStorage.setItem('cardPage', JSON.stringify(product));
          return product;
        })
      )
      .then(() => getShoppingCart(token))
      .then(setShoppingCart)
      .catch((err) => console.log(err));
  };

  const changeProductQuantity = (card, amount) => {
    changeAmountCardToShoppingCart(card.id, amount, token)
      .then((res) => {
        setSelectedCard((prev) => {
          const updatedCard = { ...prev, ...res };
          localStorage.setItem('cardPage', JSON.stringify(updatedCard));
          return updatedCard;
        });
      })
      .then(() => getShoppingCart(token))
      .then(setShoppingCart)
      .catch((err) => console.log(err));
  };

  const [currentUser, setCurrentUser] = useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    onClickRegistration: handleRegistrationPopupOpen,
    onClickLogin: handleLoginPopup,
  });

  const [productsContext, setProductsContext] = useState({
    novelties: [],
    popular: [],
  });

  const [shoppingCartContext, setShoppingCartContext] = useState({
    shoppingCart: [],
    totalPrice: 0,
  });

  const [isCatalogButtonClicked, setIsCatalogButtonClicked] = useState(false);

  const setShoppingCart = (shoppingCart) => {
    const totalPrice = shoppingCart.reduce(
      (acc, product) => acc + product.amount * product.price_per_unit,
      0
    );
    setShoppingCartContext({
      shoppingCart,
      totalPrice,
    });
  };

  const findProductInShoppingCart = useCallback(
    (productId) =>
      shoppingCartContext.shoppingCart.find(
        (product) => product.id === productId
      ),
    [shoppingCartContext]
  );

  const onIncreaseProductInShoppingCart = useCallback(
    (productId) => {
      if (!token) {
        handleLoginPopup();
        return;
      }

      const productFromCart = findProductInShoppingCart(productId);
      const promise = productFromCart
        ? changeProductQuantityInShoppingCart(
            productId,
            productFromCart.amount + 1,
            token
          )
        : addProductToShoppingCart(productId, token);

      promise.then(() => getShoppingCart(token)).then(setShoppingCart);
    },
    [token, shoppingCartContext]
  );

  const onDecreaseProductInShoppingCart = useCallback(
    (productId) => {
      const productFromCart = findProductInShoppingCart(productId);
      const promise =
        productFromCart.amount > 1
          ? changeProductQuantityInShoppingCart(
              productId,
              productFromCart.amount - 1,
              token
            )
          : deleteProductFromShoppingCart(productId, token);

      promise.then(() => getShoppingCart(token)).then(setShoppingCart);
    },
    [token, shoppingCartContext]
  );

  const onDeleteProductFromShoppingCart = useCallback(
    (productId) => {
      const promise = deleteProductFromShoppingCart(productId, token);
      promise.then(() => getShoppingCart(token)).then(setShoppingCart);
    },
    [token, shoppingCartContext]
  );

  useEffect(() => {
    setToken(getLocalStorageToken());
    getNovelties().then((novelties) =>
      setProductsContext((prevState) => ({ ...prevState, novelties }))
    );
    getPopularProducts().then((popular) =>
      setProductsContext((prevState) => ({ ...prevState, popular }))
    );
  }, []);

  const saveToken = ({ token }) => {
    setLocalStorageToken(token);
    setToken(token);
    setIsLoggedIn(true);
  };

  //Авторизация пользователя
  const loginUser = ({ password, email }) =>
    authorize(email, password)
      .then(saveToken)
      .then(() => handleClosePopup());

  //Регистрация пользователя
  const registerUser = ({ firstName, lastName, email, password }) =>
    register(firstName, lastName, email, password).then(() => {
      loginUser({ password, email });
    });

  useEffect(() => {
    if (!token) {
      return;
    }
    getUserProfile(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
    getShoppingCart(token).then(setShoppingCart);
    // eslint-disable-next-line
  }, [token]);

  const logOut = () => {
    // eslint-disable-next-line no-unused-expressions
    removeLocalStorageToken();
    setToken('');
    setIsLoggedIn(false);
    setCurrentUser({
      id: '',
      email: '',
      first_name: '',
      last_name: '',
    });
    navigate.current('/', { replace: true });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        ...shoppingCartContext,
        onIncreaseProductInShoppingCart,
        onDecreaseProductInShoppingCart,
        onDeleteProductFromShoppingCart,
      }}
    >
      <ProductsContext.Provider value={productsContext}>
        <CurrentUserContext.Provider value={currentUser}>
          <IsCatalogButtonClickedContext.Provider
            value={{ isCatalogButtonClicked, setIsCatalogButtonClicked }}
          >
            <div className="app">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route
                    path="/product/:id"
                    element={
                      <MainProductPage
                        card={selectedCard}
                        onButtonAddClick={addProduct}
                        onButtonDeleteClick={deleteProduct}
                        onButtonChangeClick={changeProductQuantity}
                        onCardClick={handleCardClick}
                      />
                    }
                  />
                  <Route
                    path="/shopping-cart"
                    element={
                      <ProtectedRouteElement
                        element={ShoppingCart}
                        isLoggedIn={isLoggedIn}
                      />
                    }
                  />
                  <Route path="/delivery" element={<Delivery />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route
                    path="/order"
                    element={
                      <ProtectedRouteElement
                        element={Order}
                        isLoggedIn={isLoggedIn}
                      />
                    }
                  />
                  <Route
                    path="/thanksfororder"
                    element={
                      <ProtectedRouteElement
                        element={ThanksForOrder}
                        isLoggedIn={isLoggedIn}
                      />
                    }
                  />{' '}
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRouteElement
                        element={Profile}
                        isLoggedIn={isLoggedIn}
                        onButtonClick={handleConfirmPopup}
                      />
                    }
                  />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
                <TopScrollBtn />
              </main>
              <Footer />
              <Registration
                isPopupOpen={isRegistrationPopupOpen}
                onClosePopup={handleClosePopup}
                onCloseByOverlay={closePopupByOverlay}
                handleTogglePopup={handleLoginPopup}
                registerUser={registerUser}
              />
              <Login
                isPopupOpen={isLoginPopupOpen}
                onClosePopup={handleClosePopup}
                onCloseByOverlay={closePopupByOverlay}
                handleTogglePopup={handleRegistrationPopupOpen}
                loginUser={loginUser}
              />
              <ConfirmPopup
                isPopupOpen={isConfirmPopupOpen}
                onClosePopup={handleClosePopup}
                onCloseByOverlay={closePopupByOverlay}
                onSubmit={logOut}
              />
            </div>
          </IsCatalogButtonClickedContext.Provider>
        </CurrentUserContext.Provider>
      </ProductsContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
