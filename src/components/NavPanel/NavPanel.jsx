import './NavPanel.css';
import { HashLink } from 'react-router-hash-link';

export default function NavPanel({
  activeNavPanelItem,
  appointActiveNavPanelItem,
}) {
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
        className={`navpanel__link ${
          activeNavPanelItem === 'contacts' ? 'navpanel__link_active' : ''
        } selectable-link`}
        onClick={() => appointActiveNavPanelItem('contacts')}
        smooth
        to={links.contacts}
      >
        Контакты
      </HashLink>
      <div className="navpanel__links">
        <HashLink
          className={`navpanel__link ${
            activeNavPanelItem === 'order' ? 'navpanel__link_active' : ''
          } selectable-link`}
          onClick={() => appointActiveNavPanelItem('order')}
          smooth
          to={links.delivery.order}
        >
          Как сделать заказ
        </HashLink>
        <HashLink
          className={`navpanel__link ${
            activeNavPanelItem === 'deliveryAndReturns'
              ? 'navpanel__link_active'
              : ''
          } selectable-link`}
          onClick={() => appointActiveNavPanelItem('deliveryAndReturns')}
          smooth
          to={links.delivery.deliveryAndReturns}
        >
          Доставка и возврат
        </HashLink>
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
