import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../hooks/useForm';

function Login({ isPopupOpen, onCloseByOverlay, onClosePopup }) {
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
    title: 'Войти',
    isValid: isFormValid,
    submitButtonTextContent: 'Войти',
    routerLinkQuestion: 'Еще не зарегистрированы?',
    routerLinkText: 'Регистрация',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
  };

  return (
    <PopupWithForm {...popupWithFormProps}>
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
      <span className="popup__error ">{errorsState.email}</span>
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
    </PopupWithForm>
  );
}

export default Login;
