import './ThanksForOrder.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function ThanksForOrder() {
  const navigate = useRef(useNavigate());
  const { orderDetails } = useContext(ShoppingCartContext);
  if (!orderDetails?.id) {
    navigate.current('/', { replace: true });
  }

  // const randomNumber = Math.floor(Math.random() * 999 + 1);
  return (
    <section className="thanksfororder">
      <h1 className="thanksfororder__title">Спасибо за заказ</h1>
      <div className="thanksfororder__intro">
        <p className="thanksfororder__confirm">
          Ваш заказ № {orderDetails?.id} оформлен.
        </p>
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
