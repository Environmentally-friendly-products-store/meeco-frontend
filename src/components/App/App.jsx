import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';

import Registration from '../Registration/Registration';
import Login from '../Login/Login';

export default function App() {
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
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
    <>
      <Header onClickRegistration={handleRegistrationPopupOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
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
    </>
  );
}
