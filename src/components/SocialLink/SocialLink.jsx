import './SocialLink.css';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import TelegramIcon from '../TelegramIcon/TelegramIcon';
import VKIcon from '../VKIcon/VKIcon';
import MailIcon from '../MailIcon/MailIcon';

export default function SocialLink() {
  return (
    <nav className="sociallink">
      <ul className="sociallink__list">
        <li className="sociallink__item">
          <WhatsAppIcon />
        </li>
        <li className="sociallink__item">
          <TelegramIcon />
        </li>
        <li className="sociallink__item">
          <VKIcon />
        </li>
        <li className="sociallink__item">
          <MailIcon />
        </li>
      </ul>
    </nav>
  );
}
