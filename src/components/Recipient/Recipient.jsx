import './Recipient.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Recipient() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="recipient">
      <form className="recipient__form">
        <div className="recipient__deliveryadress">
          <h2 className="recipient__title">Адрес доставки</h2>
          <input
            type="text"
            placeholder="Город, улица, дом, квартира"
            className="recipient__input"
          />
          <span className="recipient__form-error"></span>
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

            <input
              type="number"
              placeholder="Телефон *"
              className="recipient__input"
            />
            <span className="recipient__form-error"></span>
          </div>
        </div>

        <div className="recipient__comment">
          <h2 className="recipient__title">Комментарий к заказу</h2>
          <input
            type="text"
            placeholder="Укажите дополнительную информацию к заказу"
            className="recipient__input"
          />
        </div>
      </form>
    </div>
  );
}

export default Recipient;
