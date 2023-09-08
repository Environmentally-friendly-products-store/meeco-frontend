import './DeliveryAdress.css';

function DeliveryAdress() {
  return (
    <div className="deliveryadress">
      <h2 className="deliveryadress__title">Адрес доставки</h2>
      <form className="deliveryadress__form">
        <label className="deliveryadress__label">
          Город, улица, дом, квартира *
        </label>
        <input
          type="text"
          placeholder="Введите адрес"
          className="deliveryadress__input"
        />
        <span className="deliveryadress__form-error"></span>
        <label className="deliveryadress__label">Телефон *</label>
        <input
          type="nunber"
          placeholder="+7 999 999-99-99"
          className="deliveryadress__input"
        />
        <span className="deliveryadress__form-error"></span>
        <label className="deliveryadress__label">Комментарий к заказу</label>
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

export default DeliveryAdress;
