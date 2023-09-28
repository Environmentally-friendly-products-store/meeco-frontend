import OrderProduct from '../OrderProduct/OrderProduct';
import './YourOrder.css';
import image from '../../images/product_card_filler_image_s.jpg';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

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
  const { totalPrice } = useContext(ShoppingCartContext);

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
    </div>
  );
}

export default YourOrder;
