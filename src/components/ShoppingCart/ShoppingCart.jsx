/* import { useContext } from 'react'; */
import './ShoppingCart.css';
import '../ShoppingCartItem/ShoppingCardItem';

import { NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import stylizePrice from '../../utils/functions/stylizePrice';

import ShoppingCardItem from '../ShoppingCartItem/ShoppingCardItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import calculateTotalPrice from '../../utils/functions/calculateTotalPrice';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function ShoppingCart({ onCardClick }) {
  const { shoppingCart } = useContext(ShoppingCartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const onTotalPriceChange = () => {
    calculateTotalPrice(setTotalPrice);
  };

  useEffect(() => {
    calculateTotalPrice(setTotalPrice);
  }, []);

  return (
    <main
      className={`shopping-cart ${
        shoppingCart.length < 1 ? 'shopping-cart_style_empty' : ''
      }`}
    >
      <h1 className="shopping-cart__title">Корзина</h1>
      {shoppingCart.length < 1 ? (
        <EmptyCart />
      ) : (
        <>
          <section className="shopping-cart__products-block">
            <ul className="shopping-cart__products-list">
              {shoppingCart.map((product) => (
                <ShoppingCardItem
                  key={product.id}
                  product={product}
                  onTotalPriceChange={onTotalPriceChange}
                  onCardClick={onCardClick}
                />
              ))}
            </ul>
          </section>

          <section className="shopping-cart__place-order-block">
            <div className="shopping-cart__total-block">
              <p className="shopping-cart__total-block-item">Итого</p>
              <p className="shopping-cart__total-block-item">{`${stylizePrice(
                totalPrice
              )} ₽`}</p>
            </div>

            <NavLink className="shopping-cart__place-order-button" to="/order">
              Оформить заказ
            </NavLink>
          </section>
        </>
      )}
    </main>
  );
}

export default ShoppingCart;
