import './Login.css';
import React, { useMemo, useState } from 'react';
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
  } = useForm(
    {
      email: '',
      password: '',
    },
    false
  );

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
    routerLinkText: 'Я еще не зарегистрирован',
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

  const additionalEyeButtonStyle = useMemo(
    () => (isShowPasswordButtonClicked ? 'popup__button_type_eye-show' : ''),
    [isShowPasswordButtonClicked]
  );

  return (
    <PopupWithForm {...popupWithFormProps}>
      <span className="popup__server-error">{serverError}</span>
      <label className={getLabelClassName(errorsState.email)}>Email</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.email}
        name="email"
        className={getInputClassName(errorsState.email)}
        required
      />
      <span className="popup__error ">{errorsState.email}</span>
      <div className="popup__label-container">
        <label className={getLabelClassName(errorsState.password)}>
          Пароль
        </label>
        <p className="popup__recovery-password">Забыли пароль?</p>
      </div>
      <div className="popup__password">
        <input
          onChange={handleInputChange}
          value={'' || userState.password}
          type={isShowPasswordButtonClicked ? 'text' : 'password'}
          name="password"
          className={getInputClassName(errorsState.password)}
          required
        />
        <button
          className={`popup__button popup__button_type_eye-not-show ${additionalEyeButtonStyle}`}
          type="button"
          onClick={() => togglePasswordType()}
        />
      </div>
      <span className="popup__error">{errorsState.password}</span>
    </PopupWithForm>
  );
}

export default Login;
