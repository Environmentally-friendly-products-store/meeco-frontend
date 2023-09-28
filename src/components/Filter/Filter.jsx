import './Filter.css';
import FilterItem from '../FilterItem/FilterItem';

function Filter({ filterItems, onFilterButtonClick, onResetClick }) {
  return (
    <div className="filter filter_style_general">
      <ul className="filter__list">
        <li className="text text_weight_normal">
          <button
            className="text text_weight_normal filter__list-button selectable-link"
            onClick={onResetClick}
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
