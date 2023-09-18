import React, { useContext } from 'react';

import NavigationLink from '../NavigationLink/NavigationLink';
import userPath from '../../images/user.svg';
/* import favoritePath from '../../images/favorite.svg'; */
import shopingCartPath from '../../images/shoppingCart.svg';
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({ onClickRegistration }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {currentUser.id ? (
          <li className="navigation__item">
            <NavigationLink
              text={currentUser.first_name}
              image={userPath}
              path="/profile"
            />
          </li>
        ) : (
          <li className="navigation__item" onClick={onClickRegistration}>
            <NavigationLink text="Войти" image={userPath} />
          </li>
        )}
        {/* <li className="navigation__item">
          <NavigationLink path={'/'} text={'Избранное'} image={favoritePath} />
        </li> */}
        <li className="navigation__item">
          <NavigationLink
            path={'/shopping-cart'}
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
