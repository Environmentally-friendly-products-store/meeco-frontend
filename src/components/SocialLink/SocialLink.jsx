import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import './SocialLink.css';

function SocialLink() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavigationLink path={'/'} text={'Войти'} image={userPath} />
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

export default SocialLink;

