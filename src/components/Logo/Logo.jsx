import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        className="logo__image selectable-button"
        src={logoPath}
        alt="Логотип интернет-магазина MeEco"
      />
    </Link>
  );
}

export default Logo;
