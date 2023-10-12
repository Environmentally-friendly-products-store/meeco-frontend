import './EmptyCart.css';
import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <p className="empty-cart__text">Пока корзина пуста</p>
      <NavLink
        className="empty-cart__text empty-cart__button selectable-link"
        to="/catalog"
      >
        Перейти в каталог
      </NavLink>
    </div>
  );
}

export default EmptyCart;
