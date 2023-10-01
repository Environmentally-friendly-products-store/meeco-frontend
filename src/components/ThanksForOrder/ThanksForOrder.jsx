import './ThanksForOrder.css';
import { Link } from 'react-router-dom';

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
      </div>
      <Link to="/catalog" className="thanksfororder__link">
        Продолжить покупки
      </Link>
    </section>
  );
}

export default ThanksForOrder;
