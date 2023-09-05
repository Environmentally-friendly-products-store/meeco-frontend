import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({ isPopupOpen, onCloseByOverlay, onClosePopup }) {
  let isValid = true;

  const popupWithFormProps = {
    name: 'login',
    isOpen: isPopupOpen,
    title: 'Войти',
    isValid: isValid,
    submitButtonTextContent: 'Войти',
    routerLinkQuestion: 'Еще не зарегистрированы?',
    routerLinkText: 'Регистрация',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
  };

  return (
    <PopupWithForm {...popupWithFormProps}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email-input"
        className="popup__input popup__input_type_email"
        minLength="11"
        maxLength="114"
        required
      />
      <span className="popup__error email-input-error"></span>
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        id="password-input"
        className="popup__input popup__input_type_password"
        minLength="8"
        maxLength="40"
        required
      />
      <span className="popup__error password-input-error"></span>
    </PopupWithForm>
  );
}

export default Login;
