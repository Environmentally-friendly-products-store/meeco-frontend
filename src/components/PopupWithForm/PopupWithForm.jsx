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
  routerLinkQuestion,
  routerLinkText,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && `popup_active`}`}
      onClick={onCloseByOverlay}
    >
      <div className="popup__block">
        <h2 className="popup__title">{title}</h2>
        <form
          onSubmit={onSubmit}
          className="popup__form"
          name={`${name}`}
          method="post"
        >
          {children}
          <button
            disabled={!isValid}
            type="submit"
            className="popup__button popup__button_type_submit"
          >
            {submitButtonTextContent}
          </button>
        </form>
        <p className="popup__information">
          {routerLinkQuestion}&#160;
          <Link to="/" className="popup__link">
            {routerLinkText}
          </Link>
        </p>
        <button
          onClick={onClose}
          type="button"
          className="popup__button popup__button_type_close"
          aria-label="Кнопка закрытия окна"
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
