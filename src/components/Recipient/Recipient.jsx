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

          <div className="recipient__field-container">
            <input type="text" className="recipient__input" required />
            <label className="recipient__field-placeholder">
              Город, улица, дом, квартира
            </label>
            <span className="recipient__form-error"></span>
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
                name="phone"
                required
                className="recipient__input"
              />
              <label className="recipient__field-placeholder">Телефон *</label>
              <span className="recipient__form-error"></span>
            </div>
          </div>
        </div>

        <div className="recipient__comment">
          <h2 className="recipient__title">Комментарий к заказу</h2>
          <div className="recipient__field-container">
            <input type="text" className="recipient__input" />
            <label className="recipient__field-placeholder">
              Укажите дополнительную информацию к заказу
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Recipient;
