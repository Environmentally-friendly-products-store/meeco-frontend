import OrderProduct from '../OrderProduct/OrderProduct';
import './YourOrder.css';
import image from '../../images/product_card_filler_image_s.jpg';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import calculateTotalPrice from '../../utils/functions/calculateTotalPrice';
import { useNavigate } from 'react-router-dom';
import defineImage from '../../utils/functions/defineImage';
import stylizePrice from '../../utils/functions/stylizePrice';

import ShoppingCardItem from '../ShoppingCartItem/ShoppingCardItem';
import EmptyCart from '../EmptyCart/EmptyCart';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

/* Массив-затычка  из корзины*/

function YourOrder() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/thanksfororder', { replace: true });
  };

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
  return (
    <div className="yourorder">
      <h2 className="yourorder__title">Ваш заказ</h2>
      <ul className="yourorder__list">
        {shoppingCart.map((product) => (
          <OrderProduct
            key={product.id}
            product={product}
            onAmountChange={onAmountChange}
          />
        ))}
      </ul>

      <div className="yourorder__total">
        <p className="yourorder__total-text">Итого</p>
        <p className="yourorder__total-summ">{totalPrice} &#8381;</p>
      </div>
      <button
        onClick={handleButtonClick}
        className="yourorder__button selectable-button"
      >
        Подтвердить заказ
      </button>
      <p className="yourorder__politic">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <Link
          className="yourorder__politic-text selectable-link"
          to="/privacy-policy"
        >
          Политикой конфиденциальности
        </Link>{' '}
      </p>
    </div>
  );
}

export default YourOrder;
