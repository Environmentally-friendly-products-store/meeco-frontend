import './FilterItem.css';
/* import { useState } from 'react'; */

/* function FilterItem({ filterItem, onFiltersChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = (name, isChecked) => {
    setIsChecked(isChecked);
    onFiltersChange(name, isChecked);
  };

  return (
    <li
      className="filter__list-item text text_weight_normal"
      key={filterItem.id}
    >
      <label className="filter__checkbox-label">
        <input
          className="filter__invisible-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheckboxChange(filterItem.name, e.target.checked)}
        />
        <span className="filter__visible-checkbox"></span>
        <span>{filterItem.name}</span>
      </label>
    </li>
  );
} */

function FilterItem({ filterItem, onFilterButtonClick }) {
  /* const [isActive, setIsActive] = useState(false); */

  const onClick = () => {
    onFilterButtonClick(filterItem.name);
    /* setIsActive(!isActive); */
  };

  return (
    <li className="text text_weight_normal">
      <button
        /* className={`text text_weight_normal filter__list-button ${
          isActive ? 'filter__list-button_active' : ''
        }`} */
        className="text text_weight_normal filter__list-button"
        onClick={onClick}
      >
        {filterItem.name}
      </button>
    </li>
  );
}
export default FilterItem;
