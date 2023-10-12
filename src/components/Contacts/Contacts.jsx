import './Contacts.css';
import InfoPage from '../InfoPage/InfoPage';
import InfoBlock from '.././InfoBlock/InfoBlock';
import PhoneIcon from '../PhoneIcon/PhoneIcon';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import DeliveryIcon from '../DeliveryIcon/DeliveryIcon';
import TelegramIcon from '../TelegramIcon/TelegramIcon';
import VKIcon from '../VKIcon/VKIcon';
import MailIcon from '../MailIcon/MailIcon';

export default function Contacts() {
  return (
    <InfoPage title="Контакты" id="contacts">
      <InfoBlock title="Круглосуточная техподдержка" showImage={false}>
        <div className="contacts">
          <PhoneIcon />
          <p className="contacts__text">8 800 900 90 90</p>
        </div>
      </InfoBlock>
      <InfoBlock title="Мы всегда онлайн" showImage={false}>
        <div className="contacts">
          <WhatsAppIcon />
          <p className="contacts__text">+7 922 11 77 999</p>
        </div>
        <div className="contacts">
          <TelegramIcon />
          <p className="contacts__text">@meeco</p>
        </div>
        <div className="contacts">
          <VKIcon />
          <p className="contacts__text">@meeco</p>
        </div>
        <div className="contacts">
          <MailIcon />
          <p className="contacts__text">info@meeco.ru</p>
        </div>
      </InfoBlock>
      <InfoBlock title="Мы офлайн" showImage={false}>
        <div className="contacts">
          <DeliveryIcon />
          <p className="contacts__text">Все заказы отгружаем из Москвы</p>
        </div>
      </InfoBlock>
    </InfoPage>
  );
}
