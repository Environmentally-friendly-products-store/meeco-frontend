import './NavPanel.css';
import { HashLink } from 'react-router-hash-link';

export default function NavPanel() {
  const links = {
    contacts: '/contacts#contacts',
    delivery: {
      order: '/delivery#aboutOrder',
      payment: '/delivery#aboutPayment',
      deliveryAndReturns: '/delivery#aboutDeliveryAndReturns',
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
      <div className="navpanel__links">
        <HashLink
          className="navpanel__link selectable-link"
          smooth
          to={links.delivery.order}
        >
          Как сделать заказ
        </HashLink>
        {/* <HashLink
          className="navpanel__link selectable-link"
          smooth
          to={links.delivery.payment}
        >
          Оплата
        </HashLink> */}
        <HashLink
          className="navpanel__link selectable-link"
          smooth
          to={links.delivery.deliveryAndReturns}
        >
          Доставка и возврат
        </HashLink>
        {/* <HashLink
          className="navpanel__link selectable-link"
          smooth
          to={links.delivery.returns}
        >
          Возврат
        </HashLink> */}
      </div>
      <HashLink
        className="navpanel__link navpanel__link_style_back selectable-link"
        smooth
        to="/catalog"
      >
        Назад
      </HashLink>
    </nav>
  );
}
