import './Filter.css';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  filterName,
  filterItems,
  parentkey,
  parentbody,
  onFormValuesChange,
}) {
  return (
    <div className="filter">
      <h3 className="filter__title">{filterName}</h3>
      <ul className="filter__filter-list">
        {filterItems.map((filterItem) => (
          <FilterItem
            filterItem={filterItem}
            key={filterItem.id}
            parentkey={parentkey}
            parentbody={parentbody}
            onFormValuesChange={onFormValuesChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
