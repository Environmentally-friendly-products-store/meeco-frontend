import './ShoppingCartItem.css';
import { NavLink } from 'react-router-dom';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';

function ShoppingCartItem({
  product,
  onAmountChange,
  onDeleteFromShoppingCart,
}) {
  const { name, brand, id, price_per_unit, amount, preview_image } = product;
  const totalItemPrice = price_per_unit * amount;

  return (
    <li className="shopping-cart__product">
      <NavLink
        className="shopping-cart__link selectable-button"
        to={`/product/${id}`}
      >
        <img
          className="shopping-cart__product-image"
          src={defineImage(preview_image)}
          alt={name}
        />
      </NavLink>

      <p className="shopping-cart__product-item shopping-cart__product-brand">
        {brand.name}
      </p>
      <p className="shopping-cart__product-item shopping-cart__product-name">
        {name}
      </p>

      <p className="shopping-cart__product-item shopping-card__product-price shopping-cart__product-item_style_unit">
        {`${stylizePrice(price_per_unit)} ₽`}
      </p>

      <div className="shopping-card__product-quantity-switch">
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-minus selectable-button"
          onClick={() => onAmountChange(id, false)}
          disabled={amount === 1}
        ></button>
        <p className="shopping-cart__product-item shopping-card__product-quantity-switch-counter">
          {amount}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus selectable-button"
          onClick={() => onAmountChange(id, true)}
        ></button>
      </div>

      <p className="shopping-cart__product-item shopping-card__product-price shopping-card__product-price_style_sum">
        {`${stylizePrice(totalItemPrice)} ₽`}
      </p>

      <button
        className="shopping-cart__delete-button"
        onClick={() => onDeleteFromShoppingCart(id)}
      ></button>
    </li>
  );
}

export default ShoppingCartItem;
