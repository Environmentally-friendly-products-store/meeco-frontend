import './ThanksForOrder.css';
import { Link } from 'react-router-dom';
import arrowleft from '../../images/arrow-left.svg';
import YourOrder from '../YourOrder/YourOrder';
import DeliveryAdress from '../DeliveryAdress/DeliveryAdress';
import Recipient from '../Recipient/Recipient';
import checkcircle from '../../images/CheckCircle.svg';

function ThanksForOrder() {
  return (
    <section className="thanksfororder">
      <h1 className="thanksfororder__title">Спасибо за заказ</h1>
      <div className="thanksfororder__intro">
        <p className="thanksfororder__confirm">Ваш заказ №ХХХ оформлен.</p>
        <p className="thanksfororder__text">
          В ближайшее время наши сотрудники свяжутся с вами для согласования
          даты и времени доставки.
        </p>
        <p className="thanksfororder__text">
          На данный момент оплата возможна только наличным или по карте в момент
          доставки курьером. Приносим извинения за неудобства.
        </p>
        <img
          className="thanksfororder__circle"
          src={checkcircle}
          alt="Проверено"
        ></img>
      </div>
      <div className="order__content">
        <div>
          <DeliveryAdress />
          <Recipient />
          <div className="order__link">
            <Link to="/catalog" className="order__link-text">
              <img className="order__arrow" src={arrowleft} alt="Стрелка" />
              Продолжить покупки
            </Link>
          </div>
        </div>
        <div className="order__order">
          <YourOrder />
        </div>
      </div>
    </section>
  );
}

export default ThanksForOrder;
