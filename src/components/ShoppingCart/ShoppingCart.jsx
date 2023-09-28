/* import { useContext } from 'react'; */
import './ShoppingCart.css';
import '../ShoppingCartItem/ShoppingCardItem';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import stylizePrice from '../../utils/functions/stylizePrice';

import ShoppingCardItem from '../ShoppingCartItem/ShoppingCardItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function ShoppingCart({ onCardClick }) {
  const {
    shoppingCart,
    totalPrice,
    onIncreaseProductInShoppingCart,
    onDecreaseProductInShoppingCart,
  } = useContext(ShoppingCartContext);

  const onAmountChange = (productId, isIncrease) => {
    if (isIncrease) {
      onIncreaseProductInShoppingCart(productId);
    } else {
      onDecreaseProductInShoppingCart(productId);
    }
  };

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
                  onAmountChange={onAmountChange}
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
