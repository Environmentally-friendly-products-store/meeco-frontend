import React, { useMemo, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../hooks/useForm';

function Registration({
  isPopupOpen,
  onCloseByOverlay,
  onClosePopup,
  handleTogglePopup,
  registerUser,
}) {
  const {
    values: userState,
    handleChange: handleInputChange,
    errors: errorsState,
    setErrors,
    isValid: isFormValid,
  } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(userState).catch((e) => {
      setServerError('');
      setErrors({});

      if (e.isValidationError()) {
        setErrors(e.error);
      } else {
        setServerError(e.error);
      }
    });
  };

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
    onSubmit,
  };

  const [serverError, setServerError] = useState('');

  const matchPassword =
    userState.password !== userState.repeatedPassword &&
    userState.repeatedPassword !== '';

  const getLabelClassName = (error) =>
    `popup__label ${error ? 'popup__label_error' : ''}`;

  const getInputClassName = (error) =>
    `popup__input ${error ? 'popup__input_error' : ''}`;

  const [isShowPasswordButtonClicked, setIsShowPaswordButtonClicked] =
    useState(false);

  const [
    isRepeatedShowPasswordsButtonClicked,
    setIsRepeatedShowPasswordsButtonClicked,
  ] = useState(false);

  const togglePasswordType = () =>
    setIsShowPaswordButtonClicked(!isShowPasswordButtonClicked);

  const toggleRepeatedPasswordType = () =>
    setIsRepeatedShowPasswordsButtonClicked(
      !isRepeatedShowPasswordsButtonClicked
    );

  const additionalEyeButtonStylePassword = useMemo(
    () => (isShowPasswordButtonClicked ? 'popup__button_type_eye-show' : ''),
    [isShowPasswordButtonClicked]
  );

  const additionalEyeButtonStyleRepeatPassword = useMemo(
    () =>
      isRepeatedShowPasswordsButtonClicked ? 'popup__button_type_eye-show' : '',
    [isRepeatedShowPasswordsButtonClicked]
  );

  return (
    <PopupWithForm {...popupWithFormProps}>
      <span className="popup__server-error">{serverError}</span>
      <label className={getLabelClassName(errorsState.firstName)}>Имя</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.firstName}
        type="text"
        name="firstName"
        className={getInputClassName(errorsState.firstName)}
        minLength="2"
        maxLength="32"
        autoComplete="off"
        onFocus={(e) => e.target.setAttribute('autoComplete', 'none')}
        required
      />
      <span className="popup__error">{errorsState.firstName}</span>
      <label className={getLabelClassName(errorsState.lastName)}>Фамилия</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.lastName}
        type="text"
        name="lastName"
        className={getInputClassName(errorsState.lastName)}
        minLength="2"
        maxLength="64"
        autoComplete="off"
        onFocus={(e) => e.target.setAttribute('autoComplete', 'none')}
        required
      />
      <span className="popup__error">{errorsState.lastName}</span>
      <label className={getLabelClassName(errorsState.email)}>Email</label>
      <input
        onChange={handleInputChange}
        value={'' || userState.email}
        type="email"
        name="email"
        className={getInputClassName(errorsState.email)}
        minLength="8"
        maxLength="114"
        onFocus={(e) => e.target.setAttribute('autoComplete', 'none')}
        required
      />
      <span className="popup__error">{errorsState.email}</span>
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
          onFocus={(e) => e.target.setAttribute('autoComplete', 'none')}
          autoComplete="off"
          required
        />
        <button
          className={`popup__button popup__button_type_eye-not-show ${additionalEyeButtonStylePassword}`}
          type="button"
          onClick={() => togglePasswordType()}
        />
      </div>
      <span className="popup__error">{errorsState.password}</span>
      <label className={getLabelClassName(matchPassword)}>
        Повторите пароль
      </label>
      <div className="popup__password">
        <input
          onChange={handleInputChange}
          value={'' || userState.repeatedPassword}
          type={isRepeatedShowPasswordsButtonClicked ? 'text' : 'password'}
          name="repeatedPassword"
          className={getInputClassName(matchPassword)}
          minLength="8"
          maxLength="40"
          autoComplete="off"
          required
        />
        <button
          className={`popup__button popup__button_type_eye-not-show ${additionalEyeButtonStyleRepeatPassword}`}
          type="button"
          onClick={() => toggleRepeatedPasswordType()}
        />
      </div>
      <span className="popup__error">
        {matchPassword ? 'Пароли не совпадают' : ''}
      </span>
    </PopupWithForm>
  );
}

export default Registration;
