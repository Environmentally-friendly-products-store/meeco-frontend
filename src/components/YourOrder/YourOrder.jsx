import OrderProduct from '../OrderProduct/OrderProduct';
import './YourOrder.css';

function YourOrder() {
  return (
    <div className="yourorder">
      <h2 className="yourorder__title">Ваш заказ</h2>
      <OrderProduct />
      <OrderProduct />
      <div className="yourorder__total">
        <p className="yourorder__total-text">Итого</p>
        <p className="yourorder__total-summ">2 000 &#8381;</p>
      </div>
    </div>
  );
}

export default YourOrder;
