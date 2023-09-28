import React, { useContext } from 'react';

import NavigationLink from '../NavigationLink/NavigationLink';
import userIcon from '../../images/user.svg';
/* import favoritePath from '../../images/favorite.svg'; */
import shoppingCart from '../../images/cart.svg';
import shoppingCartActive from '../../images/cart-active.svg';
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation() {
  const currentUser = useContext(CurrentUserContext);
  const count = 2;
  return (
    <nav className="navigation">
      {currentUser.id ? (
        <ul className="navigation__list">
          <li className="navigation__item navigation__item-user">
            <NavigationLink
              text={currentUser.first_name}
              image={userIcon}
              path="/profile"
            />
          </li>
          <li className="navigation__item">
            <NavigationLink
              path={'/shopping-cart'}
              text={'Корзина'}
              image={count ? shoppingCartActive : shoppingCart}
              count={count}
            />
          </li>
        </ul>
      ) : (
        <ul className="navigation__list">
          <li
            className="navigation__item"
            onClick={currentUser.onClickRegistration}
          >
            <NavigationLink text="Войти" image={userIcon} />
          </li>
          <li className="navigation__item" onClick={currentUser.onClickLogin}>
            <NavigationLink
              text={'Корзина'}
              image={count ? shoppingCartActive : shoppingCart}
              count={count}
            />
          </li>
        </ul>
      )}
      {/* <li className="navigation__item">
          <NavigationLink path={'/'} text={'Избранное'} image={favoritePath} />
        </li> */}
    </nav>
  );
}

export default Navigation;
