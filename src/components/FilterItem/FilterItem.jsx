import './FilterItem.css';

import { useContext } from 'react';

import { ActiveItemContext } from '../../contexts/ActiveItemContext';
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
  const { activeItem, setItem } = useContext(ActiveItemContext);

  const onClick = () => {
    onFilterButtonClick(filterItem.slug);
    setItem(filterItem);
  };

  return (
    <li className="text text_weight_normal">
      <button
        className={`text text_weight_normal filter__list-button ${
          filterItem === activeItem ? 'filter__list-button_active' : ''
        }`}
        onClick={onClick}
      >
        {filterItem.name}
      </button>
    </li>
  );
}
export default FilterItem;
