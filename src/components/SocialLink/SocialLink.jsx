import React from 'react';
import { Link } from 'react-router-dom';
import brandvk from '../../images/brand-vk.svg'
import brandwhatsapp from '../../images/brand-whatsapp.svg'
import brandtelegram from '../../images/brand-telegram.svg'
import mail from '../../images/mail.svg'

import './SocialLink.css';

function SocialLink() {
  return (
    <nav className="sociallink">
      <ul className="sociallink__list">
        <li className="sociallink__item">
          <Link to={'https://web.whatsapp.com/'} className="sociallink__link">
            <button className="sociallink__button">
              <img className="sociallink__image" src={brandwhatsapp} alt="Whatsapp"></img>
            </button>
          </Link>
        </li>
        <li className="sociallink__item">
          <Link to={'https://web.telegram.org'} className="sociallink__link">
            <button className="sociallink__button">
              <img className="sociallink__image" src={brandtelegram} alt="Телеграмм"></img>
            </button>
          </Link>
        </li>
        <li className="sociallink__item">
          <Link to={'https://vk.com/ecome'} className="sociallink__link">
            <button className="sociallink__button">
              <img className="sociallink__image" src={brandvk} alt="VK"></img>
            </button>
          </Link>
        </li>
        <li className="sociallink__item">
          <Link to={'https://mail.yandex.ru/compose?mailto=info@meeco.ru'} className="sociallink__link">
            <button className="sociallink__button">
              <img className="sociallink__image" src={mail} alt="Написать письмо"></img>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SocialLink;

