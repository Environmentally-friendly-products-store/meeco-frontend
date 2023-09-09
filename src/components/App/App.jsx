import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

export default function App() {
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
  useScrollToTop();
  const handleRegistrationPopupOpen = () =>
    setIsRegistrationPopupOpen(!isRegistrationPopupOpen);
  const handleClosePopup = () => setIsRegistrationPopupOpen(false);
  const closePopupByOverlay = (event) => {
    if (event.target.classList.contains('popup_active')) {
      handleClosePopup();
    }
  };
  //дописать функции для открытия/закрытия Login

  return (
    <div className="app">
      <Header onClickRegistration={handleRegistrationPopupOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<MainProductPage />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <TopScrollBtn />
      </main>
      <Footer />
      <Registration
        isPopupOpen={isRegistrationPopupOpen}
        onClosePopup={handleClosePopup}
        onCloseByOverlay={closePopupByOverlay}
      />
      <Login
        isPopupOpen={isRegistrationPopupOpen}
        onClosePopup={handleClosePopup}
        onCloseByOverlay={closePopupByOverlay}
      />
    </div>
  );
}
