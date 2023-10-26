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
            <button
              disabled={!isValid}
              type="submit"
              className={`popup__button popup__button_type_submit ${submitButtonClass} ${submitButtonSize}`}
              onClick={onSubmit}
            >
              {submitButtonTextContent}
            </button>
            {submitButtonClass && (
              <button
                type="button"
                className="popup__button popup__button_type_save"
                onClick={onClose}
              >
                Остаться
              </button>
            )}
          </div>
          {name === 'registration' && (
            <div className="popup__information">
              <Link
                to="/privacy-policy"
                target="_blank"
                className="popup__link popup__link_type_policy selectable-link"
              >
                Нажимая на кнопку, вы соглашаетесь
                <span className="popup__link_type_policy">
                  c Политикой конфиденциальности
                </span>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
