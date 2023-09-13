import './Filter.css';
import { useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';

function Filter({ filterName, filterItems, onFilterButtonClick }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="filter filter_style_general">
      <h2 className="filter__title text text_weight_bold">{filterName}</h2>

      <ul
        className={`filter__list ${!isExpanded ? 'filter__list_hidden' : ''}`}
      >
        {filterItems.map((filterItem) => (
          <FilterItem
            filterItem={filterItem}
            key={filterItem.id}
            onFilterButtonClick={onFilterButtonClick}
          />
        ))}
      </ul>

      <button
        className={`filter__chevron ${isExpanded ? 'filter__chevron_up' : ''}`}
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Filter;
