import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import MainProductPage from '../MainProductPage/MainProductPage';
import Delivery from '../Delivery/Delivery';
import useScrollToTop from '../../hooks/useScrollToTop';
import AboutUs from '../AboutUs/AboutUs';
import TopScrollBtn from '../TopScrollBtn/TopScrollBtn';
import Order from '../Order/Order';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

import ThanksForOrder from '../ThanksForOrder/ThanksForOrder';

import Profile from '../Profile/Profile';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import Contacts from '../Contacts/Contacts';

import { authorize, getUserProfile, register } from '../../utils/userApi.js';
import { setLocalStorageToken } from '../../utils/localStorage';
import Preloader from '../Preloader/Preloader';

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
  const [isLoading, setIsLoading] = useState(true);

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
  //дописать функции для открытия/закрытия Login
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const handleLoginPopup = () => setIsLoginPopupOpen(!isLoginPopupOpen);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const handleConfirmPopup = () => setIsConfirmPopupOpen(!isConfirmPopupOpen);
  // Функции по передаче коррекного товара MainProductPage при нажатии на товар в каталогах/главной странице
  const [selectedCard, setSelectedCard] = useState([]);
  const handleCardClick = (card) => setSelectedCard(card);

  const [isLocalStorageRead, setIsLocalStorageRead] = useState(false);
  const saveToken = ({ token }) => {
    setLocalStorageToken(token);
    setToken(token);
    setIsLoggedIn(true);
  };

  //Авторизация пользователя
  const loginUser = ({ password, email }) => {
    return authorize(email, password).then(saveToken);
  };

  //Регистрация пользователя
  const registerUser = ({ firstName, lastName, email, password }) => {
    return (
      register(firstName, lastName, email, password)
        // TODO: добавить автологин, запрос даннных пользователя и сохранение их в localStorage
        .then(() => loginUser({ password, email }))
        .finally(() => {
          navigate.current('/', { replace: true });
          handleClosePopup();
        })
    );
  };

  useEffect(() => {
    if (!token) {
      // Окончание загрузки только после окончания чтения из LocalStorage для предотвращения "мигания"
      isLocalStorageRead && setIsLoading(false);
      return;
    }
    getUserProfile(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [token]);

  if (isLoading) {
    return <Preloader />;
  }

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
              element={<MainProductPage card={selectedCard} />}
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
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
