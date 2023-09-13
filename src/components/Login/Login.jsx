import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../hooks/useForm';

function Login({
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
    email: '',
    password: '',
  });

  const popupWithFormProps = {
    name: 'login',
    isOpen: isPopupOpen,
    title: 'Авторизация',
    isValid: isFormValid,
    submitButtonTextContent: 'Войти',
    routerLinkText: 'Я еще не зарегистрирован',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
    togglePopup: handleTogglePopup,
  };

  return (
    <PopupWithForm {...popupWithFormProps}>
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
      <span className="popup__error ">{errorsState.email}</span>
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
    </PopupWithForm>
  );
}

export default Login;
