import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import InfoPage from '../InfoPage/InfoPage';
import chevron from '../../images/chevron.svg';

function Profile({ onButtonClick, onOpenPasswordPopup }) {
  const currentUser = useContext(CurrentUserContext);
  const [inputsActive, setInputsActive] = useState(false);
  const handleInputsActive = () => setInputsActive(!inputsActive);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);
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
        <form className="profile__form">
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              minLength="2"
              maxLength="32"
              disabled={!inputsActive}
              value={currentUser.first_name || ''}
              placeholder={currentUser.first_name || ''}
              className={`profile__input ${
                inputsActive ? 'profile__input_active' : ''
              }`}
            />
          </div>
          <span className="profile__error"></span>
          <div className="profile__field">
            <label className="profile__label">Фамилия</label>
            <input
              type="text"
              minLength="2"
              maxLength="64"
              disabled={!inputsActive}
              value={currentUser.last_name || ''}
              placeholder={currentUser.last_name || ''}
              className={`profile__input ${
                inputsActive ? 'profile__input_active' : ''
              }`}
            />
          </div>
          <span className="profile__error"></span>
          <div className="profile__field">
            <label className="profile__label">Телефон</label>
            <input
              type="tel"
              disabled={!inputsActive}
              value={currentUser.phone || ''}
              placeholder={currentUser.phone || ''}
              minLength="11"
              maxLength="18"
              className={`profile__input ${
                inputsActive ? 'profile__input_active' : ''
              }`}
            />
          </div>
          <span className="profile__error"></span>
          <div className="profile__field">
            <label className="profile__label">Адрес</label>
            <textarea
              type="text"
              minLength="8"
              maxLength="512"
              value={currentUser.delivery_address || ''}
              disabled={!inputsActive}
              placeholder={currentUser.delivery_address || ''}
              className={`profile__input profile__input_type_adress ${
                inputsActive
                  ? 'profile__input_active profile__input_type_adress-active'
                  : ''
              }`}
            />
          </div>
          <span className="profile__error"></span>
          <button
            type="submit"
            className={`profile__button profile__button_type_submit ${
              !inputsActive ? 'profile__button_inactive' : ''
            }`}
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
              <span className="profile__span"></span>
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
      <div className="profile__orders-content">
        <h3 className="profile__subtitle">Мои заказы</h3>
        <div className="profile__accordion">
          <div className="profile__main-info">
            <h3 className="profile__order-title">Заказ № 003 от 19 октября </h3>
            <p className="profile__order-status">Оформлен</p>
            <p className="profile__order-date">24.10.2023</p>
            <p className="prodile__order-summary">5320&#160;₽</p>
            <img
              className="profile__image profile__image_type_chevron"
              src={chevron}
              alt={'Кнопка "подробнее о заказе"'}
              onClick={handleClick}
            />
          </div>
          <ul
            className={`profile__details ${
              isClicked ? 'profile__details_clicked' : ''
            }`}
          >
            <li className="profile__detail-item">
              <p className="profile__product-name">
                Набор из 4 видов высокогорного чая в крафтовых пакетах по 150гр,
                деревянная ложка
              </p>
              <p className="profile__product_quantity">1&#160;шт.</p>
              <p className="profile__product-cost">2360&#160;₽</p>
            </li>
            <li className="profile__detail-item">
              <p className="profile__product-name">
                Набор из 4 видов высокогорного чая в крафтовых пакетах по 150гр,
                деревянная ложка
              </p>
              <p className="profile__product_quantity">1&#160;шт.</p>
              <p className="profile__product-cost">2360&#160;₽</p>
            </li>
            <li className="profile__detail-item">
              <p className="profile__product-name">
                Набор из 4 видов высокогорного чая в крафтовых пакетах по 150гр,
                деревянная ложка
              </p>
              <p className="profile__product_quantity">1&#160;шт.</p>
              <p className="profile__product-cost">2360&#160;₽</p>
            </li>
          </ul>
        </div>
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
