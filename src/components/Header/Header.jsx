import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation.jsx';
import catalog from '../../images/catalog.svg';
import './Header.css';

function Header({ resetFilters }) {
  const onClick = () => {
    resetFilters();
  };

  return (
    <header className="header">
      <Logo />
      <div className="header__func">
        <Link to="/catalog" className="header__link" onClick={onClick}>
          <img
            className="header__image"
            src={catalog}
            alt="Кнопка выбора каталога товаров"
          ></img>
          <span className="header__text">Каталог</span>
        </Link>
        <SearchForm />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
