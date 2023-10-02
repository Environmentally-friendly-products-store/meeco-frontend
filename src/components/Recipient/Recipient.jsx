import './Recipient.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function Recipient() {
  const currentUser = useContext(CurrentUserContext);
  const { onCreateOrder } = useContext(ShoppingCartContext);
  const { values, errors, isValid, handleChange } = useForm(
    {
      delivery_address: '',
      contact_phone_number: '',
      comment: '',
    },
    '.recipient__form'
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    onCreateOrder(values);
  };

  const getLabelClassName = (error) =>
    `recipient__field-placeholder ${
      error ? 'recipient__field-placeholder_error' : ''
    }`;

  const getInputClassName = (error) =>
    `recipient__input ${error ? 'recipient__input_error' : ''}`;

  return (
    <div className="recipient">
      <form className="recipient__form" onSubmit={handleSubmit}>
        <div className="recipient__deliveryadress">
          <h2 className="recipient__title">Адрес доставки</h2>

          <div className="recipient__field-container">
            <input
              type="text"
              name="delivery_address"
              className={getInputClassName(errors.delivery_address)}
              required
              onChange={handleChange}
              value={values.delivery_address || ''}
              maxLength={512}
              minLength={8}
            />
            <label className={getLabelClassName(errors.delivery_address)}>
              Город, улица, дом, квартира
            </label>
            <span className="recipient__form-error">
              {errors.delivery_address}
            </span>
          </div>
        </div>
        <div className="recipient__recipient">
          <h2 className="recipient__title">Получатель</h2>
          <div className="recipient__field">
            <input
              type="text"
              placeholder="Имя"
              className="recipient__input"
              value={currentUser.first_name || ''}
              disabled={true}
            />
            <input
              type="text"
              placeholder="Фамилия"
              className="recipient__input"
              value={currentUser.last_name || ''}
              disabled={true}
            />
            <input
              type="email"
              placeholder="Email"
              className="recipient__input"
              value={currentUser.email || ''}
              disabled={true}
            />
            <div className="recipient__field-container">
              <input
                type="tel"
                id="phone"
                name="contact_phone_number"
                required
                className={getInputClassName(errors.contact_phone_number)}
                onChange={handleChange}
                value={values.contact_phone_number || ''}
              />
              <label className={getLabelClassName(errors.contact_phone_number)}>
                Телефон *
              </label>
              <span className="recipient__form-error">
                {errors.contact_phone_number}
              </span>
            </div>
          </div>
        </div>

        <div className="recipient__comment">
          <h2 className="recipient__title">Комментарий к заказу</h2>
          <div className="recipient__field-container">
            <input
              type="text"
              name="comment"
              className="recipient__input"
              onChange={handleChange}
              value={values.comment || ''}
            />
            <label className="recipient__field-placeholder">
              Укажите дополнительную информацию к заказу
            </label>
          </div>
        </div>

        <button type="submit" className="recipient__button" disabled={!isValid}>
          Подтвердить заказ
        </button>
        <p className="recipient__politic">
          Нажимая кнопку, вы соглашаетесь с &nbsp;
          <Link
            className="recipient__politic-text selectable-link"
            to="/privacy-policy"
            target="_blank"
          >
            Политикой конфиденциальности
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Recipient;
