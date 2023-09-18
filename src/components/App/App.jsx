import './App.css';
import { useEffect, useRef, useState } from 'react';
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
/* import getCurrentCard '../../utils/Api'; */
import PopupWithInfo from '../PopupWithInfo/PopupWithInfo';

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

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
  });
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
    setIsPopupWithInfoOpen(false);
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
  // Функции по передаче коррекного товара MainProductPage при нажатии на товар в каталогах/главной странице
  const [selectedCard, setSelectedCard] = useState([]);
  const handleCardClick = (card) => {
    setSelectedCard(card);
    /* Api для отправки карточки конкретного товара:
    getCurrentCard(card.id)
      .then((card) => setSelectedCard(card))
      .catch((err)=> console.log(err))
    */
  };

  // Функции для попапа с информацией для страницы товара
  const [isPopupWithInfoOpen, setIsPopupWithInfoOpen] = useState(false);
  const handlePopupWithInfo = () =>
    setIsPopupWithInfoOpen(!isPopupWithInfoOpen);

  useEffect(() => {
    // Если карты нет, то взять ее в localStorage
    if (selectedCard.length === 0 && localStorage.getItem('cardPage')) {
      setSelectedCard(JSON.parse(localStorage.getItem('cardPage')));
    }
  }, []);

  const saveToken = ({ token }) => {
    setLocalStorageToken(token);
    setToken(token);
    setIsLoggedIn(true);
  };

  //Авторизация пользователя
  const loginUser = ({ password, email }) => {
    return authorize(email, password)
      .then(saveToken)
      .then(() => handleClosePopup());
  };

  //Регистрация пользователя
  const registerUser = ({ firstName, lastName, email, password }) => {
    return register(firstName, lastName, email, password)
      .then(() => {
        loginUser({ password, email });
      })
      .then(() => {
        navigate.current('/', { replace: true });
      });
  };

  useEffect(() => {
    setToken(getLocalStorageToken());
  }, []);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header onClickRegistration={handleRegistrationPopupOpen} />
        <main>
          <Routes>
            <Route path="/" element={<Main onCardClick={handleCardClick} />} />
            <Route
              path="/catalog"
              element={<Catalog onCardClick={handleCardClick} />}
            />
            <Route
              path="/product"
              element={
                <MainProductPage
                  card={selectedCard}
                  onButtonClick={handlePopupWithInfo}
                />
              }
            />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/order" element={<Order />} />
            <Route path="/thanksfororder" element={<ThanksForOrder />} />{' '}
            <Route
              path="/profile"
              element={<Profile onButtonClick={handleConfirmPopup} />}
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
        <PopupWithInfo
          isPopupOpen={isPopupWithInfoOpen}
          onClosePopup={handleClosePopup}
          onCloseByOverlay={closePopupByOverlay}
          handleRegistrationTogglePopup={handleRegistrationPopupOpen}
          handleLoginTogglePopup={handleLoginPopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
