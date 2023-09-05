import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <p className="footer__copyright">&copy; 2023</p>
      <p className="footer__menu">Покупателям</p>
      <Link to="/" className="footer__link">Доставка и оплата</Link>
      <Link to="/" className="footer__link">Контакты</Link>
      <p className="footer__menu">Магазин</p>


      <Navigation />
    </footer>
  );
}

export default Footer;
