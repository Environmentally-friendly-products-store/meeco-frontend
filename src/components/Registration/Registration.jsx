import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../hooks/useForm';

function Registration({
  isPopupOpen,
  onCloseByOverlay,
  onClosePopup,
  handleTogglePopup,
}) {
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
    routerLinkText: 'Я уже зарегистрирован',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
    togglePopup: handleTogglePopup,
  };

  return (
    <PopupWithForm {...popupWithFormProps}>
      <p className="popup__text">Заполните, пожалуйста, несколько полей</p>
      <label>Имя</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.firstName}
        type="text"
        name="firstName"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="32"
        required
      />
      <span className="popup__error">{errorsState.firstName}</span>
      <label>Фамилия</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.lastName}
        type="text"
        name="lastName"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="64"
        required
      />
      <span className="popup__error">{errorsState.lastName}</span>
      <label>Email</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.email}
        type="email"
        name="email"
        className="popup__input popup__input_type_email"
        minLength="8"
        maxLength="111"
        required
      />
      <span className="popup__error">{errorsState.email}</span>
      <label>Пароль</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.password}
        type="password"
        name="password"
        className="popup__input popup__input_type_password"
        minLength="8"
        maxLength="40"
        required
      />
      <span className="popup__error">{errorsState.password}</span>
      <label>Пароль</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.repeatedPassword}
        type="password"
        name="repeatedPassword"
        className="popup__input popup__input_type_password"
        minLength="8"
        maxLength="40"
        required
      />
      {userState.password !== userState.repeatedPassword &&
        userState.repeatedPassword !== '' && (
          <span className="popup__error">Пароли не совпадают</span>
        )}
    </PopupWithForm>
  );
}

export default Registration;
