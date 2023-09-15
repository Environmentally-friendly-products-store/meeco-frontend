import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
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
        />
        <Login
          isPopupOpen={isLoginPopupOpen}
          onClosePopup={handleClosePopup}
          onCloseByOverlay={closePopupByOverlay}
          handleTogglePopup={handleRegistrationPopupOpen}
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
