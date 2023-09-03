import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form" method="post">
      <div className="search-form__string">
        <input
          className="search-form__input"
          type="text"
          placeholder="Найти"
          minLength={3}
          maxLength={255}
          required
        />
        <button
          className="search-form__button"
          type="submit"
          aria-label="Кнопка поиска товаров"
        ></button>
      </div>
      <span className="search-form__error"></span>
    </form>
  );
}

export default SearchForm;
