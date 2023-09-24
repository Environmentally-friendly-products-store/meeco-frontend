import React from 'react';

function PopupWithInfo({
  isPopupOpen,
  onClosePopup,
  onCloseByOverlay,
  handleRegistrationTogglePopup,
  handleLoginTogglePopup,
}) {
  const onHandleRegistrationButtonClick = () => {
    onClosePopup();
    handleRegistrationTogglePopup();
  };

  const onHandleLoginButtonClick = () => {
    onClosePopup();
    handleLoginTogglePopup();
  };

  return (
    <div
      className={`popup popup_type_info ${isPopupOpen && `popup_active`}`}
      onClick={onCloseByOverlay}
    >
      <div className="popup__block">
        <h2 className="popup__title">Ошибка</h2>
        <p className="popup__text popup__text_info">
          Для продолжения покупок необходимо ввести учетные данные.
        </p>
        <p className="popup__text">
          <span
            className="popup__link popup__link_info selectable-link"
            onClick={onHandleLoginButtonClick}
          >
            Войти&#160;
          </span>
          или&#160;
          <span
            className="popup__link popup__link_info selectable-link"
            onClick={onHandleRegistrationButtonClick}
          >
            Зарегистрироваться
          </span>
        </p>
        <button
          onClick={onClosePopup}
          type="button"
          className="popup__button popup__button_type_close selectable-button"
          aria-label="Кнопка закрытия окна"
        />
      </div>
    </div>
  );
}

export default PopupWithInfo;
