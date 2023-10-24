import './ShoppingCartItem.css';
import { NavLink } from 'react-router-dom';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';

function ShoppingCartItem({ data, onAmountChange, onDeleteFromShoppingCart }) {
  const { amount, total_price, product } = data;

  return (
    <li className="shopping-cart__product">
      <NavLink
        className="shopping-cart__link selectable-button"
        to={`/product/${product.id}`}
      >
        <img
          className="shopping-cart__product-image"
          src={defineImage(product.preview_image)}
          alt={product.name}
        />
      </NavLink>

      <p className="shopping-cart__product-item shopping-cart__product-brand">
        {product.brand}
      </p>
      <p className="shopping-cart__product-item shopping-cart__product-name">
        {product.name}
      </p>

      <p className="shopping-cart__product-item shopping-card__product-price shopping-cart__product-item_style_unit">
        {`${stylizePrice(product.price_per_unit)} ₽`}
      </p>

      <div className="shopping-card__product-quantity-switch">
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-minus selectable-button"
          onClick={() => onAmountChange(product.id, false)}
          disabled={amount === 1}
        ></button>
        <p className="shopping-cart__product-item shopping-card__product-quantity-switch-counter">
          {amount}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus selectable-button"
          onClick={() => onAmountChange(product.id, true)}
        ></button>
      </div>

      <p className="shopping-cart__product-item shopping-card__product-price shopping-card__product-price_style_sum">
        {`${stylizePrice(total_price)} ₽`}
      </p>

      <button
        className="shopping-cart__delete-button"
        onClick={() => onDeleteFromShoppingCart(product.id)}
      ></button>
    </li>
  );
}

export default ShoppingCartItem;
