import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import SocialLink from '../SocialLink/SocialLink.jsx';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__menu">
        <p className="footer__menu-title">Покупателям</p>
        <Link to="/" className="footer__link">
          Доставка и оплата
        </Link>
        <Link to="/" className="footer__link">
          Контакты
        </Link>
      </div>
      <div className="footer__menu">
        <p className="footer__menu-title">Магазин</p>
        <Link to="/" className="footer__link">
          О нас
        </Link>
        <Link to="/" className="footer__link">
          Политика конфеденциальности
        </Link>
      </div>
      <div>
        <p className="footer__number">8 800 900 90 90</p>
        <p className="footer__email">info@meeco.ru</p>
        <SocialLink />
      </div>
      <p className="footer__copyright">&copy; 2023</p>
    </footer>
  );
}

export default Footer;
