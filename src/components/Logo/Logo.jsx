import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/Logo.svg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        className="logo__image"
        src={logoPath}
        alt="Логотип интернет-магазина MeEco"
      />
    </Link>
  );
}

export default Logo;
