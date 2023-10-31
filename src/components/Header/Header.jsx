import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation.jsx';
import catalog from '../../images/catalog.svg';
import { useContext } from 'react';
import './Header.css';

import { IsCatalogButtonClickedContext } from '../../contexts/IsCatalogButtonClickedContext';

function Header({ onSearch, onChange, searchList }) {
  const { isCatalogButtonClicked, setIsCatalogButtonClicked } = useContext(
    IsCatalogButtonClickedContext
  );

  const onClick = () => {
    setIsCatalogButtonClicked(!isCatalogButtonClicked);
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
        <SearchForm
          onSearch={onSearch}
          onChange={onChange}
          searchList={searchList}
        />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
