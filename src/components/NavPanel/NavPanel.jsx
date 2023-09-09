import './NavPanel.css';
import { HashLink } from 'react-router-hash-link';

export default function NavPanel() {
  return (
    <nav className="navpanel__container">
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to="/contacts"
      >
        Контакты
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to="#aboutOrder"
      >
        Как сделать заказ
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to="#aboutPayment"
      >
        Оплата
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to="#aboutDelivery"
      >
        Доставка
      </HashLink>
      <HashLink
        className="navpanel__link selectable-link"
        smooth
        to="#aboutReturns"
      >
        Возврат
      </HashLink>
      <HashLink className="navpanel__link selectable-link" smooth to="/catalog">
        Вернуться к каталогу
      </HashLink>
    </nav>
  );
}
