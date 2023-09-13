import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './ConfirmPopup.css';

function ConfirmPopup({ isPopupOpen, onClosePopup, onCloseByOverlay }) {
  const popupWithFormProps = {
    name: 'confirm',
    isOpen: isPopupOpen,
    title: 'Вы точно хотите выйти',
    submitButtonTextContent: 'Выйти',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
    submitButtonClass: 'popup__button_type_logout',
  };

  return <PopupWithForm {...popupWithFormProps} />;
}

export default ConfirmPopup;
