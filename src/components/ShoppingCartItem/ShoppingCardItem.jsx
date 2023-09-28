import './ShoppingCartItem.css';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';

function ShoppingCardItem({ product, onTotalPriceChange, onCardClick }) {
  const { name, brand, id, price_per_unit, amount, preview_image } = product;
  /* const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)) === null
      ? product.amount
      : JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)).amount
  ); */
  const [counter, setCounter] = useState(amount);
  const [totalItemPrice, setTotalItemPrice] = useState(price_per_unit * amount);

  const increaseCounter = () => {
    setCounter(counter + 1);
    setTotalItemPrice(price_per_unit * (counter + 1));
    /* localStorage.setItem(
      `purchaseItem${product.id}`,
      JSON.stringify({
        amount: counter + 1,
        totalItemPrice: product.price_per_unit * (counter + 1),
      })
    ); */
    onTotalPriceChange();
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
    setTotalItemPrice(price_per_unit * (counter - 1));
    /* localStorage.setItem(
      `purchaseItem${product.id}`,
      JSON.stringify({
        amount: counter - 1,
        totalItemPrice: product.price_per_unit * (counter - 1),
      })
    ); */
    onTotalPriceChange();
  };

  /* useEffect(() => {}, []); */

  return (
    <li className="shopping-cart__product">
      <NavLink
        className="shopping-cart__link selectable-button"
        to="/product"
        onClick={() => onCardClick({ ...product, amount })}
      >
        <img
          className="shopping-cart__product-image"
          src={defineImage(preview_image)}
          alt={name}
        />
      </NavLink>

      <p className="shopping-cart__product-item shopping-cart__product-brand">
        {brand}
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
          onClick={decreaseCounter}
          disabled={amount === 1}
        ></button>
        <p className="shopping-cart__product-item shopping-card__product-quantity-switch-counter">
          {amount}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus selectable-button"
          onClick={increaseCounter}
        ></button>
      </div>

      <p className="shopping-cart__product-item shopping-card__product-price shopping-card__product-price_style_sum">
        {`${stylizePrice(totalItemPrice)} ₽`}
      </p>

      <button className="shopping-cart__delete-button"></button>
    </li>
  );
}

export default ShoppingCardItem;
