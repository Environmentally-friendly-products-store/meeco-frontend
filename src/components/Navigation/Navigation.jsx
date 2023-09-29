import React, { useContext, useMemo } from 'react';

import NavigationLink from '../NavigationLink/NavigationLink';
import userIcon from '../../images/user.svg';
/* import favoritePath from '../../images/favorite.svg'; */
import shoppingCartSvg from '../../images/cart.svg';
import shoppingCartActiveSvg from '../../images/cart-active.svg';
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function Navigation() {
  const currentUser = useContext(CurrentUserContext);
  const { shoppingCart } = useContext(ShoppingCartContext);
  const count = useMemo(
    () => shoppingCart.reduce((acc, product) => acc + product.amount, 0),
    [shoppingCart]
  );
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
              image={count ? shoppingCartActiveSvg : shoppingCartSvg}
              count={count ? count : ''}
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
            <NavigationLink text={'Корзина'} image={shoppingCartSvg} />
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
