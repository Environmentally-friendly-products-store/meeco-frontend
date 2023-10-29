import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { OrdersContext } from '../../contexts/OrdersContext';
import useForm from '../../hooks/useForm';
import {
  handleInputPhoneChange,
  resetPhoneInput,
} from '../../hooks/usePhoneMask';
import './Profile.css';
import InfoPage from '../InfoPage/InfoPage';
import ProfileAccordion from '../ProfileAccordion/ProfileAccordion';

function Profile({ onButtonClick, onOpenPasswordPopup, handleSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const orders = useContext(OrdersContext);
  const [inputsActive, setInputsActive] = useState(false);
  const handleInputsActive = () => setInputsActive(!inputsActive);
  const {
    values: userState,
    handleChange: handleInputChange,
    errors: errorsState,
    isValid: isFormValid,
  } = useForm({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {};
    for (const key in userState) {
      if (userState[key].length > 0) {
        if (key === 'phone') {
          userData[key] = userState[key].replace(/\D/g, '');
        } else {
          userData[key] = userState[key];
        }
      }
    }
    handleSubmit(currentUser.id, userData);
    setInputsActive(false);
  };

  return (
    <InfoPage title="Профиль" id="profile">
      <div className="profile__row">
        <h3 className="profile__subtitle">Личные данные</h3>
        <button
          type="button"
          className={`profile__button profile__button_type_edit ${
            inputsActive ? 'profile__button_inactive' : ''
          }`}
          aria-label="Кнопка изменения личных данных"
          onClick={handleInputsActive}
        >
          изменить личные данные
        </button>
      </div>
      <div className="profile__data-content">
        <form
          className="popup__form popup__form_type_profile profile__form"
          onSubmit={onSubmit}
        >
          <div className="profile__field">
            {inputsActive ? (
              <>
                <label className="profile__label">Имя</label>
                <input
                  name="firstName"
                  type="text"
                  minLength="2"
                  maxLength="32"
                  disabled={!inputsActive}
                  onChange={handleInputChange}
                  placeholder={currentUser.first_name || ''}
                  className={`profile__input ${
                    inputsActive ? 'profile__input_active' : ''
                  }`}
                />
              </>
            ) : (
              <>
                <label className="profile__label">Имя</label>
                <p className="profile__user-data">{currentUser.first_name}</p>
              </>
            )}
          </div>
          <span className="profile__error">{errorsState.firstName}</span>
          <div className="profile__field">
            {inputsActive ? (
              <>
                <label className="profile__label">Фамилия</label>
                <input
                  name="lastName"
                  type="text"
                  minLength="2"
                  maxLength="64"
                  disabled={!inputsActive}
                  onChange={handleInputChange}
                  placeholder={currentUser.last_name || ''}
                  className={`profile__input ${
                    inputsActive ? 'profile__input_active' : ''
                  }`}
                />
              </>
            ) : (
              <>
                <label className="profile__label">Фамилия</label>
                <p className="profile__user-data">{currentUser.last_name}</p>
              </>
            )}
          </div>
          <span className="profile__error">{errorsState.lastName}</span>
          <div className="profile__field">
            {inputsActive ? (
              <>
                <label className="profile__label">Телефон</label>
                <input
                  name="phone"
                  type="tel"
                  value={userState.phone || ''}
                  disabled={!inputsActive}
                  onChange={handleInputChange}
                  onInput={handleInputPhoneChange}
                  onKeyDown={resetPhoneInput}
                  placeholder="+7 (___) _______"
                  minLength="11"
                  maxLength="18"
                  className={`profile__input ${
                    inputsActive ? 'profile__input_active' : ''
                  }`}
                />
              </>
            ) : (
              <>
                <label className="profile__label">Телефон</label>
                <p className="profile__user-data">{currentUser.phone}</p>
              </>
            )}
          </div>
          <span className="profile__error">{errorsState.phone}</span>
          <div className="profile__field">
            {inputsActive ? (
              <>
                <label className="profile__label">Адрес</label>
                <textarea
                  name="adress"
                  type="text"
                  minLength="8"
                  disabled={!inputsActive}
                  onChange={handleInputChange}
                  placeholder="Удобный адрес для доставки эко товаров"
                  className={`profile__input profile__input_type_adress ${
                    inputsActive
                      ? 'profile__input_active profile__input_type_adress-active'
                      : ''
                  }`}
                />
              </>
            ) : (
              <>
                <label className="profile__label">Адрес</label>
                <p className="profile__user-data">
                  {currentUser.delivery_address}
                </p>
              </>
            )}
          </div>
          <span className="profile__error">{errorsState.adress}</span>
          <button
            type="submit"
            className={`profile__button profile__button_type_submit ${
              !inputsActive ? 'profile__button_inactive' : ''
            }`}
            disabled={!isFormValid}
          >
            Сохранить изменения
          </button>
        </form>
        <div className="profile__registration-data">
          <div className="profile__registration-content">
            <h3 className="profile___registration-subtitle">
              Регистрационные данные
            </h3>
            <p className="profile__text">
              Email
              <span className="profile__span">{currentUser.email}</span>
            </p>
            <p className="profile__text">
              Пароль
              <button
                type="button"
                className="profile__button profile__button_type_password"
                onClick={onOpenPasswordPopup}
              >
                изменить
              </button>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`profile__orders-content ${
          inputsActive ? 'profile__orders-content_inputs' : ''
        }`}
      >
        <h3 className="profile__subtitle">Мои заказы</h3>
        {orders.length > 0 &&
          orders.map((order, index) => (
            <ProfileAccordion
              order={order}
              key={order.id}
              isLastOne={orders.length === index + 1}
            />
          ))}
      </div>
      <span className="profile__info">
        Выход из профиля не даст возможности возвращаться к заказанным товарам
      </span>
      <button
        type="button"
        className="profile__button profile__button_type_logout selectable-button"
        onClick={onButtonClick}
        aria-label="Кнопка выхода из профиля"
      >
        Выйти
      </button>
    </InfoPage>
  );
}

export default Profile;
