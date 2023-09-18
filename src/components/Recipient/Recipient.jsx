import './Recipient.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Recipient() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="recipient">
      <h2 className="recipient__title">Получатель</h2>
      <form className="recipient__form">
        <div className="recipient__field">
          <label className="recipient__label">Имя</label>
          <input
            type="text"
            placeholder="Имя"
            className="recipient__input"
            value={currentUser.first_name || ''}
            disabled={true}
          />
          <span className="recipient__form-error"></span>
        </div>
        <div className="recipient__field">
          <label className="recipient__label">Фамилия</label>
          <input
            type="nunber"
            placeholder="Фамилия"
            className="recipient__input"
            value={currentUser.last_name || ''}
            disabled={true}
          />
          <span className="recipient__form-error"></span>
        </div>
        <div className="recipient__field-email">
          <label className="recipient__label">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="recipient__input"
            value={currentUser.email || ''}
            disabled={true}
          />
          <span className="recipient__form-error"></span>
        </div>
      </form>
    </div>
  );
}

export default Recipient;
