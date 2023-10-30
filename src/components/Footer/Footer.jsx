import React from 'react';
import Logo from '../Logo/Logo.jsx';
import SocialLink from '../SocialLink/SocialLink.jsx';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer({ appointActiveNavPanelItem }) {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
        <p className="footer__copyright">
          интернет магазин © {new Date().getFullYear()}
        </p>
      </div>
      <div className="footer__menu">
        <HashLink to="/about-us#top" className="footer__link">
          О нас
        </HashLink>
        <HashLink
          to="/delivery#top"
          className="footer__link"
          onClick={() => appointActiveNavPanelItem('deliveryAndReturns')}
        >
          Доставка
        </HashLink>
        <HashLink
          to="/contacts#top"
          className="footer__link"
          onClick={() => appointActiveNavPanelItem('contacts')}
        >
          Контакты
        </HashLink>
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
      </div>

      <div className="footer__menu footer__menu_style_contacts">
        <p className="footer__menu-title">8 800 900-90-90</p>
        <p className="footer__menu-title footer__email">info@meeco.ru</p>
        <SocialLink />
        <p className="footer__attribute">
          <HashLink
            to="/privacy-policy#top"
            className="footer__link footer__link_type_site"
          >
            Политика обработки персональных данных
          </HashLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
