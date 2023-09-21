import './ShoppingCartItem.css';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ShoppingCardItem({ product, onTotalPriceChange, onCardClick }) {
  /* const [isLiked, setIsLiked] = useState(false); */
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)) === null
      ? product.amount
      : JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)).amount
  );
  const [totalItemPrice, setTotalItemPrice] = useState(
    product.price_per_unit * product.amount
  );

  /* const onLikeButtonClick = () => {
    setIsLiked(!isLiked);
  }; */

  /* const additionalLikeButtonStyles = isLiked
    ? 'shopping-cart__button_style_to_favourite_liked'
    : ''; */

  const increaseCounter = () => {
    setCounter(counter + 1);
    setTotalItemPrice(product.price_per_unit * (counter + 1));
    localStorage.setItem(
      `purchaseItem${product.id}`,
      JSON.stringify({
        amount: counter + 1,
        totalItemPrice: product.price_per_unit * (counter + 1),
      })
    );
    onTotalPriceChange();
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
    setTotalItemPrice(product.price_per_unit * (counter - 1));
    localStorage.setItem(
      `purchaseItem${product.id}`,
      JSON.stringify({
        amount: counter - 1,
        totalItemPrice: product.price_per_unit * (counter - 1),
      })
    );
    onTotalPriceChange();
  };

  useEffect(() => {
    localStorage.setItem(
      `purchaseItem${product.id}`,
      JSON.stringify({
        amount: product.amount,
        totalItemPrice,
      })
    );
  }, [product.amount, totalItemPrice, product.id]);

  return (
    <li className="shopping-cart__product">
      <NavLink
        className="shopping-cart__link selectable-button"
        to="/product"
        onClick={() => onCardClick({ ...product, amount: counter })}
      >
        <img
          className="shopping-cart__product-image"
          src={product.image_1_big}
          alt={product.name}
        />
      </NavLink>

      <p className="shopping-cart__product-brand">{product.brand}</p>
      <p className="shopping-cart__product-name">{product.name}</p>
      <p className="shopping-cart__product-details">{'Детали(объем, вес)'}</p>

      <div className="shopping-cart__product-button-section">
        <button
          className="shopping-cart__button
          shopping-cart__button_style_delete"
        >
          Удалить
        </button>
        {/* <button
          className={`shopping-cart__button
          shopping-cart__button_style_to_favourite ${additionalLikeButtonStyles}`}
          onClick={onLikeButtonClick}
        >
          Добавить в избранное
        </button> */}
      </div>

      <div className="shopping-card__product-quantity-switch">
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-minus selectable-button"
          onClick={decreaseCounter}
          disabled={counter === 1}
        ></button>
        <p className="shopping-card__product-quantity-switch-counter">
          {counter}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus selectable-button"
          onClick={increaseCounter}
        ></button>
      </div>

      <p className="shopping-card__product-price shopping-card__product-price_style_unit">
        {product.price_per_unit} ₽
      </p>
      <p className="shopping-card__product-price shopping-card__product-price_style_sum">
        {totalItemPrice}₽
      </p>
    </li>
  );
}

export default ShoppingCardItem;

/* import './ShoppingCartItem.css';

import { useState, useEffect } from 'react';

import {
  changeProductQuantityInShoppingCart,
  deleteProductFromShoppingCart,
} from '../../utils/productsApi';

function ShoppingCardItem({ product, onTotalPriceObjectChange }) {
  const [totalItemPrice, setTotalItemPrice] = useState(
    product.price_per_unit_per_unit * product.amount
  );

  const increaseCounter = () => {
    try {
      changeProductQuantityInShoppingCart(product.id, product.amount + 1);
      setTotalItemPrice(product.price_per_unit_per_unit * (product.amount + 1));
      onTotalPriceObjectChange(
        product.id,
        product.price_per_unit_per_unit * (product.amount + 1)
      );
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  };

  const decreaseCounter = () => {
    try {
      changeProductQuantityInShoppingCart(product.id, product.amount - 1);
      setTotalItemPrice(product.price_per_unit_per_unit * (product.amount - 1));
      onTotalPriceObjectChange(
        product.id,
        product.price_per_unit_per_unit * (product.amount - 1)
      );
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  };

  const onDeleteFromShoppingCartClick = () => {
    try {
      deleteProductFromShoppingCart(product.id);
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  };

  useEffect(() => {
    onTotalPriceObjectChange(
      product.id,
      product.price_per_unit_per_unit * product.amount
    );
  });

  return (
    <li className="shopping-cart__product">
      <img
        className="shopping-cart__product-image"
        src={product.image}
        alt={product.name}
      />

      <p className="shopping-cart__product-brand">{product.brand}</p>
      <p className="shopping-cart__product-name">{product.name}</p>
      <p className="shopping-cart__product-details">{'Детали(объем, вес)'}</p>

      <div className="shopping-cart__product-button-section">
        <button
          className="shopping-cart__button
          shopping-cart__button_style_delete"
          onClick={onDeleteFromShoppingCartClick}
        >
          Удалить
        </button>
      </div>

      <div className="shopping-card__product-quantity-switch">
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-minus selectable-button"
          onClick={decreaseCounter}
          disabled={product.amount === 1}
        ></button>
        <p className="shopping-card__product-quantity-switch-counter">
          {product.amount}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus selectable-button"
          onClick={increaseCounter}
        ></button>
      </div>

      <p className="shopping-card__product-price shopping-card__product-price_style_unit">
        {product.price_per_unit_per_unit} ₽
      </p>
      <p className="shopping-card__product-price shopping-card__product-price_style_sum">
        {totalItemPrice}₽
      </p>
    </li>
  );
}

export default ShoppingCardItem;
 */
