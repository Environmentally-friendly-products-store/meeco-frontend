import './NavPanel.css';
import { HashLink } from 'react-router-hash-link';

export default function NavPanel({ appointActiveItemId }) {
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
      <div className="navpanel__links">
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
          onClick={() => appointActiveItemId('aboutPayment')}
        >
          Оплата
        </HashLink>
        <HashLink
          className="navpanel__link selectable-link"
          smooth
          to={links.delivery.delivery}
          onClick={() => appointActiveItemId('aboutDelivery')}
        >
          Доставка
        </HashLink>
        <HashLink
          className="navpanel__link selectable-link"
          smooth
          to={links.delivery.returns}
          onClick={() => appointActiveItemId('aboutReturns')}
        >
          Возврат
        </HashLink>
      </div>
      <HashLink className="navpanel__link selectable-link" smooth to="/catalog">
        Вернуться в каталог
      </HashLink>
    </nav>
  );
}
