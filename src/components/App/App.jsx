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

import { FILTERS_TO_GET_All_PRODUCTS } from '../../utils/constants';
import { getMinAndMaxPricesFromPricesArray } from '../../utils/functions/getMinAndMaxPricesFromPricesArray';
import {
  authorize,
  changeUserDataById,
  changeUserPassword,
  getUserProfile,
  register,
} from '../../utils/userApi.js';
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
  mergeSessionCart,
  getProductsBySearch,
} from '../../utils/productsApi';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { trackAddToCart } from '../../utils/yandexCounter';
import Favourites from '../Favorites/Favorites';
import { FavouritesContext } from '../../contexts/FavouritesContext';
import PopupWithFilters from '../PopupWithFilters/PopupWithFilters';
import { createOrder, getOrders } from '../../utils/ordersApi';
import PasswordChanger from '../PasswordChanger/PasswordChanger';
import PopupWithInfo from '../PopupWithInfo/PopupWithInfo';
import { OrdersContext } from '../../contexts/OrdersContext';
import SearchCardSection from '../SearchCardSection/SearchCardSection';

export default function App() {
  const navigate = useRef(useNavigate());

  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLocalStorageRead, setIsLocalStorageRead] = useState(false);

  useScrollToTop();

  const handleRegistrationPopupOpen = () =>
    setIsRegistrationPopupOpen(!isRegistrationPopupOpen);
  const handleClosePopup = () => {
    setIsLoginPopupOpen(false);
    setIsRegistrationPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsFiltersPopupOpen(false);
    setIsPasswordPopupOpen(false);
    setIsInfoPopupOpen(false);
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

  const [isFiltersPopupOpen, setIsFiltersPopupOpen] = useState(false);
  const onFiltersPopupOpen = () => {
    setIsFiltersPopupOpen(!isFiltersPopupOpen);
  };
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);
  const handlePasswordPopup = () =>
    setIsPasswordPopupOpen(!isPasswordPopupOpen);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState([]);

  // Переделать функцию позже
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

  const [ordersContext, setOrderContext] = useState([]);

  const [activeNavPanelItem, setActiveNavPanelItem] = useState(null);

  const [requestParams, setRequestParams] = useState(
    FILTERS_TO_GET_All_PRODUCTS
  );

  const [activeCategoryItems, setActiveCategoryItems] = useState([]);

  const [chosenFiltersOnPanel, setChosenFiltersOnPanel] = useState([]);

  const [temporaryFiltersToSetToPanel, setTemporaryFiltersToSetToPanel] =
    useState(chosenFiltersOnPanel);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [minAndMaxPrices, setMinAndMaxPrices] = useState([0, 10000]);

  const [temporaryRequestParams, setTemporaryRequestParams] =
    useState(requestParams);

  const getMinAndMaxPrices = () => {
    setMinAndMaxPrices(getMinAndMaxPricesFromPricesArray(filteredProducts));
  };

  const updateFilteredProducts = (newFilteredProducts) => {
    setFilteredProducts(newFilteredProducts);
  };

  const changeRequestParams = (newParams) => {
    setRequestParams(newParams);
  };

  const setNewFiltersToPanel = (newFilters) => {
    setChosenFiltersOnPanel(newFilters);
  };

  const setNewTemporaryRequestParams = (newParams) => {
    setTemporaryRequestParams(newParams);
  };

  const setNewTemporaryFiltersToSetToPanel = (newFilters) => {
    setTemporaryFiltersToSetToPanel(newFilters);
  };

  const resetFilters = () => {
    changeRequestParams(FILTERS_TO_GET_All_PRODUCTS);
    setNewTemporaryRequestParams(FILTERS_TO_GET_All_PRODUCTS);
    setNewFiltersToPanel([]);
    setNewTemporaryFiltersToSetToPanel([]);
    setActiveCategoryItems([]);
  };

  const deleteFilterFromPanel = (filterToRemove, parentkeyEn) => {
    const requestParamsCopy = { ...requestParams };
    const newValues = requestParamsCopy[parentkeyEn].filter(
      (item) => item !== filterToRemove.slug
    );
    requestParamsCopy[parentkeyEn] = newValues;
    changeRequestParams({ ...requestParams, ...requestParamsCopy });
    setNewTemporaryRequestParams({ ...requestParams, ...requestParamsCopy });
    setChosenFiltersOnPanel(
      chosenFiltersOnPanel.filter(
        (filter) => filter.slug !== filterToRemove.slug
      )
    );
    setNewTemporaryFiltersToSetToPanel(
      chosenFiltersOnPanel.filter(
        (filter) => filter.slug !== filterToRemove.slug
      )
    );
  };

  const deletePriceFromPanel = (parentkeyRu, sortingType) => {
    const requestParamsCopy = {};
    let newLocalFiltersToSetToPanel;

    if (!sortingType) {
      for (let [key, value] of Object.entries(requestParams)) {
        if (key !== 'min_price' && key !== 'max_price') {
          requestParamsCopy[key] = value;
        }
      }
      newLocalFiltersToSetToPanel = chosenFiltersOnPanel.filter(
        (filter) => !filter.hasOwnProperty('max_price')
      );
    } else {
      for (let [key, value] of Object.entries(requestParams)) {
        if (key !== 'ordering' && value !== sortingType) {
          requestParamsCopy[key] = value;
        }
      }
      newLocalFiltersToSetToPanel = chosenFiltersOnPanel.filter(
        (filter) => !filter.hasOwnProperty('sortingType')
      );
    }

    changeRequestParams(requestParamsCopy);
    setNewTemporaryRequestParams(requestParamsCopy);
    setChosenFiltersOnPanel(newLocalFiltersToSetToPanel);
    setNewTemporaryFiltersToSetToPanel(newLocalFiltersToSetToPanel);
  };

  const appointActiveNavPanelItem = (item) => {
    setActiveNavPanelItem(item);
  };
  /*  */
  const setShoppingCart = (shoppingCart) => {
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
    (card) => {
      addProductToCart(card.id, token)
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
            const updatedProduct = {
              ...product,
              amount: 0,
              is_in_shopping_cart: false,
            };
            return updatedProduct;
          })
        )
        .then(() => getCart(token))
        .then(setShoppingCart)
        .catch((err) => console.log(err));
    },
    [token, isLoggedIn]
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
    [token, isLoggedIn]
  );

  const onIncreaseProductInShoppingCart = useCallback(
    (productId) => {
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
      createOrder(orderData, token)
        .catch((e) => {
          console.error(e.error);
        })
        .then((orderDetails) => {
          setOrderDetails(orderDetails);
          setOrderContext((prevState) => [...prevState, orderDetails]);
        })
        .finally(() => {
          navigate.current('/thanksfororder', { replace: true });
        });
    },
    [token]
  );

  useEffect(() => {
    setToken(getLocalStorageToken());
    setIsLocalStorageRead(true);
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
      .then((responseToken) => {
        saveToken(responseToken);
        mergeSessionCart(responseToken.token)
          .then(() =>
            getCart(responseToken.token)
              .then(setShoppingCart)
              .catch((error) => console.log(`Ошибка запроса корзины ${error}`))
          )
          .catch((error) => console.log(`Ошибка мержа корзины ${error}`));
      })
      .then(() => handleClosePopup());

  //Регистрация пользователя
  const registerUser = ({ firstName, lastName, email, password }) =>
    register(firstName, lastName, email, password).then(() => {
      loginUser({ password, email });
    });

  useEffect(() => {
    if (token) {
      getUserProfile(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
      getOrders(token).then(setOrderContext);
    }
    if (isLocalStorageRead) {
      getCart(token)
        .then(setShoppingCart)
        .catch((error) => console.log(`Ошибка запроса корзины ${error}`));
      if (token) {
        getFavourites(token)
          .then((favourites) => setFavouritesContext({ favourites }))
          .catch((error) => console.log(error));
      }
    }
    // eslint-disable-next-line
  }, [isLocalStorageRead, token]);

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
  // Изменение данный пользователя
  const changeUserData = (id, userData) => {
    changeUserDataById(id, userData, token)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  };

  const changePassword = (newPassword, currentPassword) => {
    changeUserPassword(newPassword, currentPassword, token)
      .then(() => handleClosePopup())
      .then(() => setIsInfoPopupOpen(true))
      .catch((err) => console.log(err));
  };

  const searchProducts = (value) => {
    getProductsBySearch(value)
      .then((products) => {
        setSearchValue(value);
        setSearchedProducts(products);
        setSearchList([]);
        navigate.current('/search', { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const getSearchList = (value) => {
    getProductsBySearch(value)
      .then((products) => {
        setSearchList(products.slice(0, 4));
      })
      .catch((err) => console.log(err));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        ...shoppingCartContext,
        onIncreaseProductInShoppingCart,
        onDecreaseProductInShoppingCart,
        onDeleteProductFromShoppingCart,
        onCreateOrder,
        findProductInShoppingCart,
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
            <OrdersContext.Provider value={ordersContext}>
              <div className="app">
                <Header
                  resetFilters={resetFilters}
                  onSearch={searchProducts}
                  onChange={getSearchList}
                  searchList={searchList}
                />
                <main className="main">
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                      path="/catalog"
                      element={
                        <Catalog
                          filteredProducts={filteredProducts}
                          updateFilteredProducts={updateFilteredProducts}
                          activeCategoryItems={activeCategoryItems}
                          setActiveCategoryItems={setActiveCategoryItems}
                          requestParams={requestParams}
                          changeRequestParams={changeRequestParams}
                          chosenFiltersOnPanel={chosenFiltersOnPanel}
                          setNewFiltersToPanel={setNewFiltersToPanel}
                          deleteFilterFromPanel={deleteFilterFromPanel}
                          deletePriceFromPanel={deletePriceFromPanel}
                          setNewTemporaryRequestParams={
                            setNewTemporaryRequestParams
                          }
                          setNewTemporaryFiltersToSetToPanel={
                            setNewTemporaryFiltersToSetToPanel
                          }
                          resetFilters={resetFilters}
                          onFiltersPopupOpen={onFiltersPopupOpen}
                        />
                      }
                    />
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
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
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
                          onOpenPasswordPopup={handlePasswordPopup}
                          handleSubmit={changeUserData}
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
                    <Route
                      path="/favourites"
                      element={<ProtectedRouteElement element={Favourites} />}
                    />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route
                      path="/search"
                      element={
                        <SearchCardSection
                          value={searchValue}
                          products={searchedProducts}
                        />
                      }
                    />
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
                <PasswordChanger
                  isPopupOpen={isPasswordPopupOpen}
                  onClosePopup={handleClosePopup}
                  onCloseByOverlay={closePopupByOverlay}
                  onSubmit={changePassword}
                />
                <PopupWithInfo
                  isPopupOpen={isInfoPopupOpen}
                  onClosePopup={handleClosePopup}
                  onCloseByOverlay={closePopupByOverlay}
                />
                <PopupWithFilters
                  isPopupOpen={isFiltersPopupOpen}
                  onClosePopup={onFiltersPopupOpen}
                  onCloseByOverlay={closePopupByOverlay}
                  requestParams={requestParams}
                  changeRequestParams={changeRequestParams}
                  temporaryRequestParams={temporaryRequestParams}
                  setNewTemporaryRequestParams={setNewTemporaryRequestParams}
                  chosenFiltersOnPanel={chosenFiltersOnPanel}
                  setNewFiltersToPanel={setNewFiltersToPanel}
                  temporaryFiltersToSetToPanel={temporaryFiltersToSetToPanel}
                  setNewTemporaryFiltersToSetToPanel={
                    setNewTemporaryFiltersToSetToPanel
                  }
                  resetFilters={resetFilters}
                  filteredProducts={filteredProducts}
                  minAndMaxPrices={minAndMaxPrices}
                  getMinAndMaxPrices={getMinAndMaxPrices}
                />
              </div>
            </OrdersContext.Provider>
          </CurrentUserContext.Provider>
        </ProductsContext.Provider>
      </FavouritesContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
