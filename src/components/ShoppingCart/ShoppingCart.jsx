import './ShoppingCart.css';

import '../ShoppingCartItem/ShoppingCardItem';

import { NavLink } from 'react-router-dom';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';
import { sortProducts } from '../../utils/functions/sortProducts';
import { useState } from 'react';
import ShoppingCardItem from '../ShoppingCartItem/ShoppingCardItem';

function ShoppingCart() {
  const products = sortProducts(temporaryProductsArray, 2);
  const [totalPrice, setTotalPrice] = useState(0);

  const onTotalPriceChange = (newValue) => {
    setTotalPrice(newValue);
  };

  /* Пока не понял, как передавать корректные данные в секцию c общей суммой */

  return (
    <main className="shopping-cart">
      <h1 className="shopping-cart__title">Корзина</h1>

      <div className="shopping-cart__products-block">
        <button className="shopping-cart__button shopping-cart__button_style_reset">
          Удалить все
        </button>

        <ul className="shopping-cart__products-list">
          {products.map((product) => (
            <ShoppingCardItem
              key={product.id}
              product={product}
              onTotalPriceChange={onTotalPriceChange}
            />
          ))}
        </ul>

        <div className="shopping-cart__total-block">
          <p className="shopping-cart__total-block-title">Итого</p>
          <p className="shopping-card__product-price shopping-card__product-price_style_sum">
            {totalPrice} ₽
          </p>
        </div>

        <NavLink className="shopping-cart__place-order-button" to="/">
          {/* пока что нет компонента с оформлением заказа, поэтому ссылка на Main */}
          Оформить заказ
        </NavLink>
      </div>
    </main>
  );
}

export default ShoppingCart;
