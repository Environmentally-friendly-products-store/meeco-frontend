import './EmptyCart.css';
import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <p className="empty-cart__text">
        Пока корзина пуста, но может быть положим что‑то из каталога?
      </p>
      <NavLink className="empty-cart__button" to="/catalog">
        Перейти в каталог
      </NavLink>
    </div>
  );
}

export default EmptyCart;
