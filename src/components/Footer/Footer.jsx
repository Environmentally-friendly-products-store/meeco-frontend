import React from 'react';
import Logo from '../Logo/Logo.jsx';
import SocialLink from '../SocialLink/SocialLink.jsx';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
        <p className="footer__copyright">
          интернет-магазин © {new Date().getFullYear()}
        </p>
      </div>
      <div className="footer__menu">
        <p className="footer__menu-title">Покупателям</p>
        <HashLink to="/delivery#top" className="footer__link">
          Доставка и оплата
        </HashLink>
        <HashLink to="/contacts#top" className="footer__link">
          Контакты
        </HashLink>
      </div>
      <div className="footer__menu">
        <p className="footer__menu-title">Магазин</p>
        <HashLink to="/about-us#top" className="footer__link">
          О нас
        </HashLink>
        <HashLink to="/privacy-policy#top" className="footer__link ">
          Политика конфиденциальности
        </HashLink>
      </div>
      <div>
        <div className="footer__menu">
          <p className="footer__menu-title">8 800 900 90 90</p>
          <p className="footer__menu-title footer__email">info@meeco.ru</p>
          <SocialLink />
        </div>
      </div>
      <p className="footer__attribute">
        Изображения&#160;
        <Link
          className="footer__link footer__link_type_site"
          to="https://ru.freepik.com"
          target="_blank"
        >
          freepik.com
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
