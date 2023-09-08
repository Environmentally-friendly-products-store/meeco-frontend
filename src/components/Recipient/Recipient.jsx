import './Recipient.css';

function Recipient() {
  return (
    <div className="recipient">
      <h2 className="recipient__title">Получатель</h2>
      <form className="recipient__form">
        <div className="recipient__field">
          <label className="recipient__label">Имя</label>
          <input type="text" placeholder="Имя" className="recipient__input" />
          <span className="recipient__form-error"></span>
        </div>
        <div className="recipient__field">
          <label className="recipient__label">Фамилия</label>
          <input
            type="nunber"
            placeholder="Фамилия"
            className="recipient__input"
          />
          <span className="recipient__form-error"></span>
        </div>
        <div className="recipient__field">
          <label className="recipient__label">Email</label>
          <input type="text" placeholder="Email" className="recipient__input" />
          <span className="recipient__form-error"></span>
        </div>
      </form>
    </div>
  );
}

export default Recipient;
