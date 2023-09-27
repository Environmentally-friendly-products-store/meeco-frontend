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

      <div className="order__link">
        <Link to="/shopping-cart" className="order__link-text selectable-link">
          <img className="order__arrow" src={arrowleft} alt="Стрелка" />
          Вернуться в корзину
        </Link>
      </div>
      <div className="order__content">
        <div>
          <DeliveryAdress />
          <Recipient />
        </div>
        <YourOrder />
      </div>

      {/* <div className="order__order"> */}

      {/* </div> */}
    </section>
  );
}

export default Order;
