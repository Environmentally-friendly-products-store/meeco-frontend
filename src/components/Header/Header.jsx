import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation.jsx';
import catalogPath from '../../images/catalog.svg';
import './Header.css';

function Header({ onClickRegistration }) {
  return (
    <header className="header">
      <Logo />
      <div className="header__func">
        <Link to="/catalog" className="header__link">
          <img
            className="header__image"
            src={catalogPath}
            alt="Кнопка выбора каталога товаров"
          ></img>
          <span className="header__text">Каталог</span>
        </Link>
        <SearchForm />
      </div>
      <Navigation onClickRegistration={onClickRegistration} />
    </header>
  );
}

export default Header;
