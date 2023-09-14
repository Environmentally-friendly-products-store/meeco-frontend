import React from 'react';
import NavPanel from '../NavPanel/NavPanel';
import './Profile.css';

function Profile({ onButtonClick }) {
  return (
    <section className="profile">
      <div className="profile__navigation">
        <NavPanel />
      </div>
      <div className="profile__info">
        <h2 className="profile__title">Профиль</h2>
        <p className="profile__text">
          Здесь вы можете в будущем просмотреть заказы и личные данные: адреса
          доставки и контакты
        </p>
        <button
          type="button"
          className="profile__button selectable-button"
          onClick={onButtonClick}
          aria-label="Кнопка выхода из профиля"
        >
          Выйти
        </button>
      </div>
    </section>
  );
}

export default Profile;
