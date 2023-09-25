import './Filter.css';
import FilterItem from '../FilterItem/FilterItem';

function Filter({ filterItems, onFilterButtonClick, setItem, activeItem }) {
  return (
    <div className="filter filter_style_general">
      <ul className="filter__list">
        {filterItems.map((filterItem) => (
          <FilterItem
            filterItem={filterItem}
            key={filterItem.id}
            onFilterButtonClick={onFilterButtonClick}
            setItem={setItem}
            activeItem={activeItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
