import './Order.css';
import { Link } from 'react-router-dom';
import arrowleft from '../../images/arrow-left.svg';
import YourOrder from '../YourOrder/YourOrder';
import Recipient from '../Recipient/Recipient';

function Order() {
  return (
    <section className="order">
      <div className="order__link">
        <Link
          to="/shopping-cart"
          className="product-page__link product-page__link_type_catalog"
        >
          <img className="order__arrow" src={arrowleft} alt="Стрелка" />
          <span className="product-page__link-text">Вернуться в корзину</span>
        </Link>
      </div>
      <h1 className="order__title">Оформление заказа</h1>

      <div className="order__content">
        <Recipient />
        <YourOrder />
      </div>

      {/* <div className="order__order"> */}

      {/* </div> */}
    </section>
  );
}

export default Order;
