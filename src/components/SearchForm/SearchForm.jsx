import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const resetInput = () => setSearchValue('');

  return (
    <div className="search-form">
      <form
        className={`search-form ${
          searchValue.length !== 0 ? 'search-form_active' : ''
        }`}
        method="post"
        onSubmit={handleSubmit}
      >
        <div
          className={`search-form__input-field ${
            searchValue.length !== 0 ? 'search-form__input-field_active' : ''
          }`}
        >
          <input
            className="search-form__input"
            type="text"
            name="search"
            onChange={handleChange}
            value={'' || searchValue}
            placeholder="Найти по названию"
            minLength={3}
            maxLength={255}
            required
          />
          <button
            type="button"
            className="search-form__button search-form__button_type_close"
            onClick={resetInput}
            aria-label="Кнопка очистки поиска"
          />
        </div>
        <div
          className={`search-form__button-field ${
            searchValue.length !== 0 ? 'search-form__button-field_active' : ''
          }`}
        >
          <button
            disabled={searchValue < 3}
            className="search-form__button selectable-button"
            type="submit"
            aria-label="Кнопка поиска товаров"
          />
        </div>
        <span className="search-form__error"></span>
      </form>
    </div>
  );
}

export default SearchForm;
