import React from 'react';
import Logo from '../Logo/Logo.jsx';
import SocialLink from '../SocialLink/SocialLink.jsx';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__menu">
        <p className="footer__menu-title">Покупателям</p>
        <HashLink to="/delivery#top" className="footer__link selectable-link">
          Доставка и оплата
        </HashLink>
        <HashLink to="/contacts#top" className="footer__link selectable-link">
          Контакты
        </HashLink>
      </div>
      <div className="footer__menu">
        <p className="footer__menu-title">Магазин</p>
        <HashLink to="/about-us#top" className="footer__link selectable-link">
          О нас
        </HashLink>
        <HashLink
          to="/privacy-policy#top"
          className="footer__link selectable-link"
        >
          Политика конфиденциальности
        </HashLink>
      </div>
      <div>
        <p className="footer__number">8 800 900 90 90</p>
        <p className="footer__email">info@meeco.ru</p>
        <SocialLink />
      </div>
      <p className="footer__copyright">© {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
