import React from 'react';

import NavigationLink from '../NavigationLink/NavigationLink';
import userPath from '../../images/user.svg';
import favoritePath from '../../images/favorite.svg';
import shopingCartPath from '../../images/shoppingCart.svg';
import './Navigation.css';

function Navigation({ onClickRegistration }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item" onClick={onClickRegistration}>
          <NavigationLink text={'Войти'} image={userPath} />
        </li>
        <li className="navigation__item">
          <NavigationLink path={'/'} text={'Избранное'} image={favoritePath} />
        </li>
        <li className="navigation__item">
          <NavigationLink
            path={'/'}
            text={'Корзина'}
            image={shopingCartPath}
            count={2}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
