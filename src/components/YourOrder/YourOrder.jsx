import OrderProduct from '../OrderProduct/OrderProduct';
import './YourOrder.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function YourOrder() {
  const { shoppingCart, totalPrice } = useContext(ShoppingCartContext);

  return (
    <div className="yourorder">
      <h2 className="yourorder__title">Ваш заказ</h2>
      <ul className="yourorder__list">
        {shoppingCart.map((data) => (
          <OrderProduct key={data.product.id} data={data} />
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
