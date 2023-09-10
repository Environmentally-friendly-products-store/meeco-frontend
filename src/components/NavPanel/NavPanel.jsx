import './NavPanel.css';
import { HashLink } from 'react-router-hash-link';

export default function NavPanel() {
  const links = {
    contacts: '/contacts#contacts',
    delivery: {
      order: '/delivery#aboutOrder',
      payment: '/delivery#aboutPayment',
      delivery: '/delivery#aboutDelivery',
      returns: '/delivery#aboutReturns',
    },
  };

  return (
    <nav className="navpanel__container">
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to={links.contacts}
      >
        Контакты
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to={links.delivery.order}
      >
        Как сделать заказ
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to={links.delivery.payment}
      >
        Оплата
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to={links.delivery.delivery}
      >
        Доставка
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to={links.delivery.returns}
      >
        Возврат
      </HashLink>
      <HashLink className="navpanel__link selectable-link" smooth to="/catalog">
        Вернуться к каталогу
      </HashLink>
    </nav>
  );
}
