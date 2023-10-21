import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../hooks/useForm';

function Login({
  isPopupOpen,
  onCloseByOverlay,
  onClosePopup,
  handleTogglePopup,
  loginUser,
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

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(userState)
      .then(() => {
        setServerError('');
      })
      .catch((e) => {
        setServerError(e.error);
      });
  };

  const popupWithFormProps = {
    name: 'login',
    isOpen: isPopupOpen,
    title: 'Авторизация',
    isValid: isFormValid,
    submitButtonTextContent: 'Войти',
    routerLinkText: 'Я еще не зарегистрирован(а)',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
    togglePopup: handleTogglePopup,
    onSubmit,
  };

  const [serverError, setServerError] = useState('');

  const getLabelClassName = (error) =>
    `popup__label ${error ? 'popup__label_error' : ''}`;

  const getInputClassName = (error) =>
    `popup__input ${error ? 'popup__input_error' : ''}`;

  const [isShowPasswordButtonClicked, setIsShowPaswordButtonClicked] =
    useState(false);
  const togglePasswordType = () =>
    setIsShowPaswordButtonClicked(!isShowPasswordButtonClicked);

  return (
    <PopupWithForm {...popupWithFormProps}>
      <label className={getLabelClassName(errorsState.email)}>Email</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.email}
        type="email"
        name="email"
        className={getInputClassName(errorsState.email)}
        minLength="8"
        maxLength="114"
        required
      />
      <span className="popup__error ">{errorsState.email}</span>
      <label className={getLabelClassName(errorsState.password)}>Пароль</label>
      <div className="popup__password">
        <input
          onChange={handleInputChange}
          value={'' || userState.password}
          type={isShowPasswordButtonClicked ? 'text' : 'password'}
          name="password"
          className={getInputClassName(errorsState.password)}
          minLength="8"
          maxLength="40"
          required
        />
        <button
          className="popup__button popup__button_type_eye"
          onClick={() => togglePasswordType()}
        />
      </div>
      <span className="popup__error">{errorsState.password}</span>
      <span className="popup__server-error">{serverError}</span>
    </PopupWithForm>
  );
}

export default Login;
