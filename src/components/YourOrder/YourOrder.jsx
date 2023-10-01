import OrderProduct from '../OrderProduct/OrderProduct';
import './YourOrder.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

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
