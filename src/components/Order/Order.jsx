import './Order.css';
import { Link } from 'react-router-dom';
import arrowleft from '../../images/arrow-left.svg';
import YourOrder from '../YourOrder/YourOrder';
import DeliveryAdress from '../DeliveryAdress/DeliveryAdress';
import Recipient from '../Recipient/Recipient';

function Order() {
  return (
    <section className="order">
      <div className="order__content">
        <h1 className="order__title">Оформление заказа</h1>
        <DeliveryAdress />
        <Recipient />
        <div className="order__link">
          <Link to="/chart" className="order__link-text">
            <img className="order__arrow" src={arrowleft} alt="Стрелка" />
            Вернуться в корзину
          </Link>
        </div>
      </div>
      <div className="order__order">
        <YourOrder />
        <button className="order__button">Подтвердить заказ</button>
        <p className="order__politic">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <Link className="order__politic-text" to="/">
            Политикой конфиденциальности
          </Link>{' '}
        </p>
      </div>
    </section>
  );
}

export default Order;
