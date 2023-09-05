import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Registration({ isPopupOpen, onCloseByOverlay, onClosePopup }) {
  let isValid = true;

  const popupWithFormProps = {
    name: 'registration',
    isOpen: isPopupOpen,
    title: 'Регистрация',
    isValid: isValid,
    submitButtonTextContent: 'Зарегистрироваться',
    routerLinkQuestion: 'Уже зарегистрированы?',
    routerLinkText: 'Войти',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
  };

  return (
    <PopupWithForm {...popupWithFormProps}>
      <input
        type="text"
        name="first-name"
        placeholder="Имя"
        id="first-name-input"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="32"
        required
      />
      <span className="popup__error first-name-input-error"></span>
      <input
        type="text"
        name="second-name"
        placeholder="Фамилия"
        id="last-name-input"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="32"
        required
      />
      <span className="popup__error last-name-input-error"></span>
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
      <input
        type="password"
        name="password"
        placeholder="Повторите пароль"
        id="password-input"
        className="popup__input popup__input_type_password"
        minLength="8"
        maxLength="40"
        required
      />
      <span className="popup__error password-input-error"></span>
      <p className="popup__information">
        Нажимая на кнопку "Зарегистрироваться", вы соглашаетесь с&#160;
        <Link to="/" className="popup__link">
          политикой обработки персональных данных
        </Link>
      </p>
    </PopupWithForm>
  );
}

export default Registration;
