import './Order.css';
import { Link } from 'react-router-dom';
import arrowleft from '../../images/arrow-left.svg';
import YourOrder from '../YourOrder/YourOrder';
import DeliveryAdress from '../DeliveryAdress/DeliveryAdress';
import Recipient from '../Recipient/Recipient';

function Order() {
  return (
    <section className="order">
      <h1 className="order__title">Оформление заказа</h1>
      <DeliveryAdress />
      <Recipient />
      <YourOrder />
      <Link to="/chart" className="order__link">
        <img className="order__arrow" src={arrowleft} alt="Стрелка" />
        Вернуться в корзину
      </Link>
    </section>
  );
}

export default Order;
