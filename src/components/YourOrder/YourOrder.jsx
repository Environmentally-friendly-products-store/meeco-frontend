import OrderProduct from '../OrderProduct/OrderProduct';
import './YourOrder.css';
import image from '../../images/product_card_filler_image_s.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import calculateTotalPrice from '../../utils/functions/calculateTotalPrice';
import { useNavigate } from 'react-router-dom';

/* Массив-затычка  из корзины*/

const products = [
  {
    id: 1,
    price: 2313,
    image,
    name: `Товар1`,
    brand: `Бренд1`,
  },
  {
    id: 2,
    price: 7824,
    image,
    name: `Товар2`,
    brand: `Бренд2`,
  },
];

function YourOrder() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/thanksfororder', { replace: true });
  };
  const [totalPrice, setTotalPrice] = useState(0);

  const onTotalPriceChange = () => {
    calculateTotalPrice(setTotalPrice);
  };

  useEffect(() => {
    calculateTotalPrice(setTotalPrice);
  }, []);
  return (
    <div className="yourorder">
      <h2 className="yourorder__title">Ваш заказ</h2>
      <ul className="yourorder__list">
        {products.map((product) => (
          <OrderProduct key={product.id} product={product} />
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
