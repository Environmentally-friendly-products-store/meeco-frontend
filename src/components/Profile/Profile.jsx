import React from 'react';
import './Profile.css';
import InfoPage from '../InfoPage/InfoPage';

function Profile({ onButtonClick }) {
  return (
    <InfoPage title="Профиль" id="profile">
      <p className="profile__text">
        Здесь вы можете просмотреть заказы и личные данные: адреса доставки и
        контакты
      </p>
      <button
        type="button"
        className="profile__button selectable-button"
        onClick={onButtonClick}
        aria-label="Кнопка выхода из профиля"
      >
        Выйти
      </button>
    </InfoPage>
  );
}

export default Profile;
