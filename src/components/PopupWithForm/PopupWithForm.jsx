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

  const submitButtonSize = name === 'login' ? 'popup__button_type_login ' : '';

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && `popup_active`}`}
      onMouseDown={onCloseByOverlay}
    >
      <div
        className={`popup__block ${
          name === 'confirm' ? 'popup__block_type_confirm' : ''
        }`}
      >
        <div>
          <button
            onClick={onClose}
            type="button"
            className={`popup__button popup__button_type_close ${
              name === 'confirm' ? 'popup__block_type_close-confirm' : ''
            } selectable-button`}
            aria-label="Кнопка закрытия окна"
          />
          <h2
            className={`popup__title ${
              name === 'confirm' ? 'popup__title_type_confirm' : ''
            }`}
          >
            {title}
          </h2>
          <p
            className="popup__toggle selectable-link"
            onClick={handleTogglePopup}
          >
            {routerLinkText}
          </p>
        </div>
        <form className="popup__form" name={`${name}`}>
          {children}
          <div className="popup__buttons">
            {submitButtonClass && (
              <button
                type="button"
                className="popup__button popup__button_type_save"
                onClick={onClose}
              >
                Остаться
              </button>
            )}
            <button
              disabled={!isValid}
              type="submit"
              className={`popup__button popup__button_type_submit ${submitButtonClass} ${submitButtonSize}`}
              onClick={onSubmit}
            >
              {submitButtonTextContent}
            </button>
          </div>
          <div className="popup__information">
            {name === 'registration' && (
              <>
                <p className="popup__information-text">
                  Нажимая на кнопку, вы соглашаетесь
                </p>
                <Link
                  to="/privacy-policy"
                  className="popup__link popup__link_type_policy selectable-link"
                >
                  c Политикой конфиденциальности
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
