import { useState, useMemo } from 'react';
import useForm from '../../hooks/useForm';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function PasswordChanger({
  isPopupOpen,
  onClosePopup,
  onCloseByOverlay,
  onSubmit,
}) {
  const [serverError, setServerError] = useState('');
  const {
    values: userState,
    handleChange: handleInputChange,
    errors: errorsState,
    setErrors,
    isValid: isFormValid,
  } = useForm({
    password: '',
    newPassword: '',
    repeatedPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userState.newPassword, userState.password);
  };

  const matchPassword =
    userState.newPassword !== userState.repeatedPassword &&
    userState.repeatedPassword !== '';

  const getLabelClassName = (error) =>
    `popup__label ${error ? 'popup__label_error' : ''}`;

  const getInputClassName = (error) =>
    `popup__input ${error ? 'popup__input_error' : ''}`;

  const popupWithFormProps = {
    name: 'passwordChanger',
    isOpen: isPopupOpen,
    title: 'Изменение пароля',
    isValid: isFormValid,
    submitButtonTextContent: 'Изменить пароль',
    onClose: onClosePopup,
    onCloseByOverlay: onCloseByOverlay,
    onSubmit: handleSubmit,
  };

  const [isShowPasswordButtonClicked, setIsShowPaswordButtonClicked] =
    useState(false);

  const [isRepeatedShowPasswordsButtonClicked] = useState(false);

  const togglePasswordType = () =>
    setIsShowPaswordButtonClicked(!isShowPasswordButtonClicked);

  const additionalEyeButtonStylePassword = useMemo(
    () => (isShowPasswordButtonClicked ? 'popup__button_type_eye-show' : ''),
    [isShowPasswordButtonClicked]
  );

  return (
    <PopupWithForm {...popupWithFormProps}>
      <span className="popup__server-error popup__server-error_type_password">
        {serverError}
      </span>
      <label className={getLabelClassName(errorsState.password)}>
        Введите пароль:
      </label>
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
      <span className="popup__error popup__error_type_password">
        {errorsState.password}
      </span>
      <label className={getLabelClassName(errorsState.password)}>
        Введите новый пароль:
      </label>
      <div className="popup__password">
        <input
          onChange={handleInputChange}
          value={'' || userState.newPassword}
          name="newPassword"
          className={getInputClassName(errorsState.newPassword)}
          type="password"
          minLength="8"
          maxLength="40"
          onFocus={(e) => e.target.setAttribute('autoComplete', 'none')}
          autoComplete="off"
          required
        />
      </div>
      <span className="popup__error popup__error_type_password">
        {errorsState.newPassword}
      </span>
      <label className={getLabelClassName(matchPassword)}>
        Введите новый пароль повторно:
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
      </div>
      <span className="popup__error popup__error_type_password">
        {matchPassword ? 'Пароли не совпадают' : ''}
      </span>
    </PopupWithForm>
  );
}
