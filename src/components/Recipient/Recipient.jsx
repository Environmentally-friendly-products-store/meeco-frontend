import './Recipient.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Recipient() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="recipient">
      <h2 className="deliveryadress__title">Адрес доставки</h2>
      <form className="recipient__form">
        <input
          type="text"
          placeholder="Город, улица, дом, квартира"
          className="deliveryadress__input"
        />
        <span className="deliveryadress__form-error"></span>

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
            type="nunber"
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

          <input
            type="number"
            placeholder="Телефон *"
            className="deliveryadress__input"
          />
          <span className="deliveryadress__form-error"></span>
        </div>

        <h2 className="recipient__title">Комментарий к заказу</h2>
        <input
          type="text"
          placeholder="Укажите дополнительную информацию к заказу"
          className="deliveryadress__input"
        />
        <span className="deliveryadress__form-error"></span>
      </form>
    </div>
  );
}

export default Recipient;
