import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form" method="post">
      <div className="search-form__input-field">
        <input
          className="search-form__input"
          type="text"
          placeholder="Найти по названию"
          minLength={3}
          maxLength={255}
          required
        />
      </div>
      <div className="search-form__button-field">
        <button
          className="search-form__button selectable-button"
          type="submit"
          aria-label="Кнопка поиска товаров"
        />
      </div>
      <span className="search-form__error"></span>
    </form>
  );
}

export default SearchForm;
