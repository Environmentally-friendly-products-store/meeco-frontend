import { useState } from 'react';

function ShoppingCardItem({ product }) {
  const [counter, setCounter] = useState(1);
  const [totalItemPrice, setTotalItemPrice] = useState(product.price);

  const increaseCounter = () => {
    setCounter(counter + 1);
    setTotalItemPrice(product.price * (counter + 1));
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
    setTotalItemPrice(product.price * (counter - 1));
  };

  return (
    <li className="shopping-cart__product" key={product.id}>
      <img
        className="shopping-cart__product-image"
        src={product.image}
        alt={product.name}
      />

      <p className="shopping-cart__product-brand">{product.brand}</p>
      <p className="shopping-cart__product-name">{product.name}</p>
      <p className="shopping-cart__product-details">{'Детали(объем, вес)'}</p>

      <div className="shopping-cart__product-button-section">
        <button className="shopping-cart__button shopping-cart__button_style_delete">
          Удалить
        </button>
        <button className="shopping-cart__button shopping-cart__button_style_to_favourite">
          Добавить в избранное
        </button>
      </div>

      <div className="shopping-card__product-quantity-switch">
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-minus"
          onClick={decreaseCounter}
          disabled={counter === 1}
        ></button>
        <p className="shopping-card__product-quantity-switch-counter">
          {counter}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus"
          onClick={increaseCounter}
        ></button>
      </div>

      <p className="shopping-card__product-price shopping-card__product-price_style_unit">
        {product.price} ₽
      </p>
      <p className="shopping-card__product-price shopping-card__product-price_style_sum">
        {totalItemPrice}₽
      </p>
    </li>
  );
}

export default ShoppingCardItem;
