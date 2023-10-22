import React, { useContext, useMemo } from 'react';

import NavigationLink from '../NavigationLink/NavigationLink';
import userIcon from '../../images/user.svg';
import shoppingCartSvg from '../../images/shopping-cart-icon.svg';
import favouriteIcon from '../../images/favourites-header.svg';
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { FavouritesContext } from '../../contexts/FavouritesContext';

function Navigation() {
  const currentUser = useContext(CurrentUserContext);
  const { shoppingCart } = useContext(ShoppingCartContext);
  const { favourites } = useContext(FavouritesContext);

  //Счетчик для корзины
  const count = useMemo(
    () => shoppingCart.reduce((acc, product) => acc + product.amount, 0),
    [shoppingCart]
  );

  //Счетчик для избранного
  const quantity = useMemo(() => favourites.length, [favourites]);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {currentUser.id ? (
          <li className="navigation__item navigation__item-user">
            <NavigationLink
              text={currentUser.first_name}
              image={userIcon}
              path="/profile"
            />
          </li>
        ) : (
          // <li className="navigation__item">
          // <NavigationLink
          // path={'/shopping-cart'}
          // text={'Корзина'}
          // image={shoppingCartSvg}
          // count={count ? count : ''}
          // />
          // </li>
          <li
            className="navigation__item"
            onClick={currentUser.onClickRegistration}
          >
            <NavigationLink text="Войти" image={userIcon} />
          </li>
        )}
        <li className="navigation__item">
          <NavigationLink
            text={'Избранное'}
            path={'/favourites'}
            image={favouriteIcon}
            count={quantity ? quantity : ''}
          />
        </li>
        {/*<li className="navigation__item" onClick={currentUser.onClickLogin}>*/}
        {/*  <NavigationLink text={'Корзина'} image={shoppingCartSvg} />*/}
        {/*</li>*/}
        <li className="navigation__item">
          <NavigationLink
            path={'/shopping-cart'}
            text={'Корзина'}
            image={shoppingCartSvg}
            count={count ? count : ''}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
