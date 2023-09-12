import './Order.css';
import { Link } from 'react-router-dom';
import arrowleft from '../../images/arrow-left.svg';
import YourOrder from '../YourOrder/YourOrder';
import DeliveryAdress from '../DeliveryAdress/DeliveryAdress';
import Recipient from '../Recipient/Recipient';
import { useNavigate } from 'react-router-dom';

function Order() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/thanksfororder', { replace: true });
  };

  return (
    <section className="order">
      <h1 className="order__title">Оформление заказа</h1>
      <div className="order__content">
        <div>
          <DeliveryAdress />
          <Recipient />
          <div className="order__link">
            <Link to="/shopping-cart" className="order__link-text">
              <img className="order__arrow" src={arrowleft} alt="Стрелка" />
              Вернуться в корзину
            </Link>
          </div>
        </div>

        <div className="order__order">
          <YourOrder />
          <button
            onClick={handleButtonClick}
            className="order__button selectable-button"
          >
            Подтвердить заказ
          </button>
          <p className="order__politic">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <Link className="order__politic-text" to="/">
              Политикой конфиденциальности
            </Link>{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Order;
