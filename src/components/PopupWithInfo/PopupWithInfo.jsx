import React from 'react';

function PopupWithInfo({ isPopupOpen, onClosePopup, onCloseByOverlay }) {
  return (
    <div
      className={`popup popup_type_info ${isPopupOpen && `popup_active`}`}
      onClick={onCloseByOverlay}
    >
      <div className="popup__block">
        <h2 className="popup__title popup__title_type_info-popup">
          Ваш пароль успешно изменен!
        </h2>
        <button
          onClick={onClosePopup}
          type="button"
          className="popup__button popup__button_type_close popup__button_type_close-info"
          aria-label="Кнопка закрытия окна"
        />
        <button
          type="button"
          onClick={onClosePopup}
          className="popup__button popup__button_type_submit popup__button_type_return"
        >
          Вернуться в личный кабинет
        </button>
      </div>
    </div>
  );
}

export default PopupWithInfo;
