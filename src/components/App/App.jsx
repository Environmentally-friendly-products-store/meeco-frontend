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
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ThanksForOrder from '../ThanksForOrder/ThanksForOrder';

import Profile from '../Profile/Profile';
import Contacts from '../Contacts/Contacts';

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
  addProductToCart,
  addToFavourites,
  changeProductQuantityInCart,
  deleteFromFavourites,
  deleteProductFromCart,
  getCart,
  getCurrentCard,
  getFavourites,
  getNovelties,
  getPopularProducts,
} from '../../utils/productsApi';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { IsCatalogButtonClickedContext } from '../../contexts/IsCatalogButtonClickedContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { trackAddToCart } from '../../utils/yandexCounter';
import Favourites from '../Favorites/Favorites';
import { FavouritesContext } from '../../contexts/FavouritesContext';

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

  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = useCallback(
    (id) => {
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
    },
    [isLoggedIn, token]
  );

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
    orderDetails: {},
  });

  const [favouritesContext, setFavouritesContext] = useState({
    favourites: [],
  });

  const [isCatalogButtonClicked, setIsCatalogButtonClicked] = useState(false);

  const [activeNavPanelItem, setActiveNavPanelItem] = useState(null);

  const appointActiveNavPanelItem = (item) => {
    setActiveNavPanelItem(item);
  };

  const setShoppingCart = (shoppingCart) => {
    console.log(shoppingCart);
    const totalPrice = shoppingCart.reduce(
      (acc, product) => acc + product.total_price,
      0
    );
    setShoppingCartContext({
      shoppingCart,
      totalPrice,
      orderDetails: {},
    });
  };

  const isProductInFavourites = useCallback(
    (productId) =>
      favouritesContext.favourites.some((product) => product.id === productId),
    [favouritesContext]
  );

  const onToggleFavourites = useCallback(
    (productId) => {
      if (!token) {
        handleLoginPopup();
        return;
      }
      const productFromFavourites = isProductInFavourites(productId);
      const promise = productFromFavourites
        ? deleteFromFavourites(productId, token)
        : addToFavourites(productId, token);
      return promise
        .then(() => getFavourites(token))
        .then((favourites) => setFavouritesContext({ favourites }))
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    [token, isProductInFavourites]
  );

  const setOrderDetails = (orderDetails) => {
    setShoppingCartContext({
      shoppingCart: [],
      totalPrice: 0,
      orderDetails,
    });
  };

  const findProductInShoppingCart = useCallback(
    (productId) =>
      shoppingCartContext.shoppingCart.find(
        (product) => product.product.id === productId
      ),
    [shoppingCartContext]
  );

  const addProduct = useCallback(
    (card, amount) => {
      if (!isLoggedIn) {
        handleLoginPopup();
        return;
      }
      addProductToCart(card.id, amount, token)
        .then((res) => {
          setSelectedCard((prev) => {
            const updatedCard = { ...prev, ...res };
            return updatedCard;
          });
        })
        .then(() => {
          trackAddToCart(selectedCard);
        })
        .then(() => getCart(token))
        .then(setShoppingCart)
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line
    [isLoggedIn, token]
  );

  const deleteProduct = useCallback(
    (card) => {
      deleteProductFromCart(card.id, token)
        .then(() =>
          setSelectedCard((product) => {
            product.amount = 0;
            product.is_in_shopping_cart = false;
            return product;
          })
        )
        .then(() => getCart(token))
        .then(setShoppingCart)
        .catch((err) => console.log(err));
    },
    [token]
  );

  const changeProductQuantity = useCallback(
    (card, amount) => {
      changeProductQuantityInCart(card.id, amount, token)
        .then((res) => {
          setSelectedCard((prev) => {
            const updatedCard = { ...prev, ...res };
            return updatedCard;
          });
        })
        .then(() => getCart(token))
        .then(setShoppingCart)
        .catch((err) => console.log(err));
    },
    [token]
  );

  const onIncreaseProductInShoppingCart = useCallback(
    (productId) => {
      if (!token) {
        handleLoginPopup();
        return;
      }

      const productFromCart = findProductInShoppingCart(productId);
      const promise = productFromCart
        ? changeProductQuantityInCart(
            productId,
            productFromCart.amount + 1,
            token
          )
        : addProductToCart(productId, token);

      promise
        .then(() => getCart(token))
        .then(setShoppingCart)
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    [token, findProductInShoppingCart]
  );

  const onDecreaseProductInShoppingCart = useCallback(
    (productId) => {
      const productFromCart = findProductInShoppingCart(productId);
      console.log(productFromCart);
      const promise =
        productFromCart.amount > 1
          ? changeProductQuantityInCart(
              productId,
              productFromCart.amount - 1,
              token
            )
          : deleteProductFromCart(productId, token);

      promise.then(() => getCart(token)).then(setShoppingCart);
    },
    [token, findProductInShoppingCart]
  );

  const onDeleteProductFromShoppingCart = useCallback(
    (productId) => {
      const promise = deleteProductFromCart(productId, token);
      promise.then(() => getCart(token)).then(setShoppingCart);
    },
    [token]
  );

  const onCreateOrder = useCallback(
    (orderData) => {
      // createOrder(orderData, token)
      //   .catch((e) => {
      //     console.error(e.error);
      //   })
      //   .then(setOrderDetails)
      //   .finally(() => {
      //     navigate.current('/thanksfororder', { replace: true });
      //   });
      setOrderDetails();
      navigate.current('/thanksfororder', { replace: true });
    },
    [token]
  );

  useEffect(() => {
    setToken(getLocalStorageToken());

    getNovelties()
      .then((novelties) =>
        setProductsContext((prevState) => ({ ...prevState, novelties }))
      )
      .catch((error) => console.log(error));

    getPopularProducts()
      .then((popular) =>
        setProductsContext((prevState) => ({ ...prevState, popular }))
      )
      .catch((error) => console.log(error));
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

    getCart(token)
      .then(setShoppingCart)
      .catch((error) => console.log(error));

    getFavourites(token)
      .then((favourites) => setFavouritesContext({ favourites }))
      .catch((error) => console.log(error));
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
        onCreateOrder,
      }}
    >
      <FavouritesContext.Provider
        value={{
          ...favouritesContext,
          onToggleFavourites,
          isProductInFavourites,
        }}
      >
        <ProductsContext.Provider value={productsContext}>
          <CurrentUserContext.Provider value={currentUser}>
            <IsCatalogButtonClickedContext.Provider
              value={{ isCatalogButtonClicked, setIsCatalogButtonClicked }}
            >
              <div className="app">
                <Header />
                <main className="main">
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
                          token={token}
                        />
                      }
                    />
                    <Route
                      path="/shopping-cart"
                      element={<ProtectedRouteElement element={ShoppingCart} />}
                    />
                    <Route
                      path="/delivery"
                      element={
                        <Delivery
                          activeNavPanelItem={activeNavPanelItem}
                          appointActiveNavPanelItem={appointActiveNavPanelItem}
                        />
                      }
                    />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route
                      path="/order"
                      element={<ProtectedRouteElement element={Order} />}
                    />
                    <Route
                      path="/thanksfororder"
                      element={
                        <ProtectedRouteElement element={ThanksForOrder} />
                      }
                    />{' '}
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRouteElement
                          element={Profile}
                          onButtonClick={handleConfirmPopup}
                        />
                      }
                    />
                    <Route
                      path="/contacts"
                      element={
                        <Contacts
                          activeNavPanelItem={activeNavPanelItem}
                          appointActiveNavPanelItem={appointActiveNavPanelItem}
                        />
                      }
                    />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                  <TopScrollBtn />
                </main>
                <Footer appointActiveNavPanelItem={appointActiveNavPanelItem} />
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
      </FavouritesContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
