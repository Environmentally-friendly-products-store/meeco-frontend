import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch, onChange, searchList }) {
  const [searchValue, setSearchValue] = useState('');
  const [isInactive, setIsInactive] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setIsInactive(false);
    setSearchValue(value);
    onChange(value);
    if (value.length === 0) {
      setIsInactive(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInactive(true);
    onSearch(searchValue);
  };

  const handleClick = (value) => {
    setIsInactive(true);
    onSearch(value);
    setSearchValue(value);
  };

  const resetInput = () => {
    setSearchValue('');
    setIsInactive(true);
  };

  return (
    <div
      className={`search-form__wrapper ${
        isInactive ? 'search-form__wrapper_disactive' : ''
      }`}
    >
      <div
        className={`search-form__wrapper_minor ${
          isInactive ? 'search-form__wrapper_minor_disactive' : ''
        }`}
      >
        <div
          className={`search-form ${isInactive ? 'search-form_disactive' : ''}`}
        >
          <form
            className={`search-form__form ${
              searchValue.length > 2 ? 'search-form_active' : ''
            }`}
            method="post"
            onSubmit={handleSubmit}
          >
            <div
              className={`search-form__input-field ${
                searchValue.length > 2 ? 'search-form__input-field_active' : ''
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
                searchValue.length > 2 ? 'search-form__button-field_active' : ''
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
          <ul
            className="search-form__results"
            style={
              searchValue.length === 0
                ? { display: 'none' }
                : { display: 'flex' }
            }
          >
            {searchList.map((product) => (
              <li className="search-form__result" key={product.id}>
                <button
                  className="search-form__result-button"
                  type="button"
                  onClick={() => handleClick(product.name)}
                />
                <p className="search-form__result-text">{product.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
