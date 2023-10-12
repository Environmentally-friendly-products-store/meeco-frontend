/* import { useContext } from 'react'; */
import './ShoppingCart.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import stylizePrice from '../../utils/functions/stylizePrice';

import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function ShoppingCart() {
  const {
    shoppingCart,
    totalPrice,
    onIncreaseProductInShoppingCart,
    onDecreaseProductInShoppingCart,
    onDeleteProductFromShoppingCart,
  } = useContext(ShoppingCartContext);

  const onAmountChange = (productId, isIncrease) => {
    if (isIncrease) {
      onIncreaseProductInShoppingCart(productId);
    } else {
      onDecreaseProductInShoppingCart(productId);
    }
  };

  const onDeleteFromShoppingCart = (productId) => {
    onDeleteProductFromShoppingCart(productId);
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
                <ShoppingCartItem
                  key={product.id}
                  product={product}
                  onAmountChange={onAmountChange}
                  onDeleteFromShoppingCart={onDeleteFromShoppingCart}
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
