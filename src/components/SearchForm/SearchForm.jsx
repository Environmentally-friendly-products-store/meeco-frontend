import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form" method="post">
      <input
        className="search-form__input"
        type="text"
        placeholder="Найти"
        minLength={3}
        maxLength={255}
        required
      />
      <button
        className="search-form__button selectable-button"
        type="submit"
        aria-label="Кнопка поиска товаров"
      ></button>
      <span className="search-form__error"></span>
    </form>
  );
}

export default SearchForm;
