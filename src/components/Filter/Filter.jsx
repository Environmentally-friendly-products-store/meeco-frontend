import './Filter.css';
import FilterItem from '../FilterItem/FilterItem';

import { useContext } from 'react';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';

function Filter({ filterItems, onFilterButtonClick, onResetClick }) {
  const { activeItem, setItem } = useContext(ActiveItemContext);

  const onClick = () => {
    onResetClick();
    setItem('Все');
  };

  return (
    <div className="filter filter_style_general">
      <ul className="filter__list">
        <li className="text text_weight_normal">
          <button
            className={`text text_weight_normal filter__list-button ${
              activeItem === 'Все' ? 'filter__list-button_active' : ''
            }`}
            onClick={onClick}
          >
            Все
          </button>
        </li>
        {filterItems.map((filterItem) => (
          <FilterItem
            filterItem={filterItem}
            key={filterItem.id}
            onFilterButtonClick={onFilterButtonClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
