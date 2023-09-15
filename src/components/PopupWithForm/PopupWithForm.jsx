import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm({
  name,
  isOpen,
  onCloseByOverlay,
  title,
  onSubmit,
  isValid,
  children,
  submitButtonTextContent,
  onClose,
  routerLinkText,
  submitButtonClass,
  togglePopup,
}) {
  const handleTogglePopup = () => {
    onClose();
    togglePopup();
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && `popup_active`}`}
      onMouseDown={onCloseByOverlay}
    >
      <div className="popup__block">
        <h2 className="popup__title">{title}</h2>
        <p
          className="popup__toggle selectable-link"
          onClick={handleTogglePopup}
        >
          {routerLinkText}
        </p>
        <form className="popup__form" name={`${name}`}>
          {children}
          <div className="popup__buttons">
            {submitButtonClass && (
              <button
                type="button"
                className="popup__button popup__button_type_save selectable-button"
                onClick={onClose}
              >
                Остаться
              </button>
            )}
            <button
              disabled={!isValid}
              type="submit"
              className={`popup__button popup__button_type_submit ${submitButtonClass} selectable-button`}
              onClick={onSubmit}
            >
              {submitButtonTextContent}
            </button>
          </div>
          {name === 'registration' && (
            <p className="popup__information">
              Нажимая на кнопку, вы соглашаетесь с&#160;
              <Link
                to="/"
                className="popup__link popup__link_type_prolicy selectable-link"
              >
                Политикой конфиденциальности
              </Link>
            </p>
          )}
        </form>
        <button
          onClick={onClose}
          type="button"
          className="popup__button popup__button_type_close selectable-button"
          aria-label="Кнопка закрытия окна"
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
