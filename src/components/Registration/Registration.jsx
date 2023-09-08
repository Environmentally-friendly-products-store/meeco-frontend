import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../hooks/useForm';

function Registration({ isPopupOpen, onCloseByOverlay, onClosePopup }) {
  const {
    values: userState,
    handleChange: handleInputChange,
    errors: errorsState,
    isValid: isFormValid,
  } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });

  const popupWithFormProps = {
    name: 'registration',
    isOpen: isPopupOpen,
    title: 'Регистрация',
    isValid: isFormValid,
    submitButtonTextContent: 'Зарегистрироваться',
    routerLinkQuestion: 'Уже зарегистрированы?',
    routerLinkText: 'Войти',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
  };

  return (
    <PopupWithForm {...popupWithFormProps}>
      <input
        onChange={handleInputChange}
        value={'' || userState.firstName}
        type="text"
        name="firstName"
        placeholder="Имя"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="32"
        required
      />
      <span className="popup__error">{errorsState.firstName}</span>
      <input
        onChange={handleInputChange}
        value={'' || userState.lastName}
        type="text"
        name="lastName"
        placeholder="Фамилия"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="64"
        required
      />
      <span className="popup__error">{errorsState.lastName}</span>
      <input
        onChange={handleInputChange}
        value={'' || userState.email}
        type="email"
        name="email"
        placeholder="Email"
        className="popup__input popup__input_type_email"
        minLength="8"
        maxLength="111"
        required
      />
      <span className="popup__error">{errorsState.email}</span>
      <input
        onChange={handleInputChange}
        value={'' || userState.password}
        type="password"
        name="password"
        placeholder="Пароль"
        className="popup__input popup__input_type_password"
        minLength="8"
        maxLength="40"
        required
      />
      <span className="popup__error">{errorsState.password}</span>
      <input
        onChange={handleInputChange}
        value={'' || userState.repeatedPassword}
        type="password"
        name="repeatedPassword"
        placeholder="Повторите пароль"
        className="popup__input popup__input_type_password"
        minLength="8"
        maxLength="40"
        required
      />
      {userState.password !== userState.repeatedPassword &&
        userState.repeatedPassword !== '' && (
          <span className="popup__error">Пароли не совпадают</span>
        )}
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
