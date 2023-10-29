import { Link } from 'react-router-dom';
import './ProfileAccordionItem.css';

export default function ProfileAccordionItem({ name, amount, price, id }) {
  return (
    <li className="profile__detail-item">
      <Link className="profile__product-name" to={`/product/${id}`}>
        {name}
      </Link>
      <p className="profile__product_quantity">{amount}&#160;шт.</p>
      <p className="profile__product-cost">{price}&#160;₽</p>
    </li>
  );
}
