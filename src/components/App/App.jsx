import { useState } from 'react';

import Main from '../Main/Main';
import Header from '../Header/Header';
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
      <Main></Main>
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
