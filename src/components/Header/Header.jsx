import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation.jsx';
import catalogPath from '../../images/catalog.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header__func">
        <Link to="/" className="header__link">
          <button
            className="header__button header__button_type_catalog"
            type="button"
          >
            <img
              className="header__image"
              src={catalogPath}
              alt="Кнопка выбора каталога товаров"
            ></img>
            <span className="header__text">Каталог</span>
          </button>
        </Link>
        <SearchForm />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
