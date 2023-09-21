/* import { useContext } from 'react'; */
import './ShoppingCart.css';
import image from '../../images/product_card_filler_image_s.jpg';
import '../ShoppingCartItem/ShoppingCardItem';

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShoppingCardItem from '../ShoppingCartItem/ShoppingCardItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import calculateTotalPrice from '../../utils/functions/calculateTotalPrice';
/* import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'; */

/* Массив-затычка */

const products = [
  {
    id: 1,
    price_per_unit: 2313,
    image_1_big: image,
    name: `Товар1`,
    brand: `Бренд1`,
    amount: 1,
  },
  {
    id: 2,
    price_per_unit: 7824,
    image_1_big: image,
    name: `Товар2`,
    brand: `Бренд2`,
    amount: 1,
  },
];

function ShoppingCart({ onCardClick }) {
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
        products.length < 1 ? 'shopping-cart_style_empty' : ''
      }`}
    >
      <h1 className="shopping-cart__title">Корзина</h1>
      {products.length < 1 ? (
        <EmptyCart />
      ) : (
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
                onCardClick={onCardClick}
              />
            ))}
          </ul>

          <div className="shopping-cart__total-block">
            <p className="shopping-cart__total-block-title">Итого</p>
            <p className="shopping-card__product-price shopping-card__product-price_style_sum">
              {totalPrice} ₽
            </p>
          </div>

          <NavLink className="shopping-cart__place-order-button" to="/order">
            {/* пока что нет компонента с оформлением заказа, поэтому ссылка на Main */}
            Оформить заказ
          </NavLink>
        </div>
      )}
    </main>
  );
}

export default ShoppingCart;

/* import './ShoppingCart.css';
import '../ShoppingCartItem/ShoppingCardItem';

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProducts } from '../../utils/productsApi';
import encodeObjToQuery from '../../utils/functions/encodeObjToQuery';

import ShoppingCardItem from '../ShoppingCartItem/ShoppingCardItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import { calculateTotalPrice } from '../../utils/functions/calculateTotalProductsPrice';

function ShoppingCart() {
  const shoppingCart = useContext(ShoppingCartContext);

  const [products, setProducts] = useState(shoppingCart.results);

  const [totalPriceObject, setTotalPriceObject] = useState({});

  const setAllShoppingCartProducts = () => {
    const response = getProducts(encodeObjToQuery({ is_in_shopping_cart: 1 }));
    const products = response.results;
    setProducts(products);
  };

  const onTotalPriceObjectChange = (id, totalItemPrice) => {
    setTotalPriceObject({
      ...totalPriceObject,
      [id]: totalItemPrice,
    });
  };

  useEffect(() => {
    setAllShoppingCartProducts();
  }, []);

  return (
    <main
      className={`shopping-cart ${
        products.length < 1 ? 'shopping-cart_style_empty' : ''
      }`}
    >
      <h1 className="shopping-cart__title">Корзина</h1>
      {products.length < 1 ? (
        <EmptyCart />
      ) : (
        <div className="shopping-cart__products-block">
          <button className="shopping-cart__button shopping-cart__button_style_reset">
            Удалить все
          </button>

          <ul className="shopping-cart__products-list">
            {products.map((product) => (
              <ShoppingCardItem
                key={product.id}
                product={product}
                onTotalPriceObjectChange={onTotalPriceObjectChange}
              />
            ))}
          </ul>

          <div className="shopping-cart__total-block">
            <p className="shopping-cart__total-block-title">Итого</p>
            <p className="shopping-card__product-price shopping-card__product-price_style_sum">
              {calculateTotalPrice(totalPriceObject)} ₽
            </p>
          </div>

          <NavLink className="shopping-cart__place-order-button" to="/order">
            Оформить заказ
          </NavLink>
        </div>
      )}
    </main>
  );
}

export default ShoppingCart; */
