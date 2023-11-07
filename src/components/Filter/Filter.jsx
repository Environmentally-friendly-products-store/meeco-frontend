import './Filter.css';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  filterName,
  filterItems,
  parentkeyEn,
  parentkeyRu,
  parentbody,
  onFormValuesChange,
  temporaryRequestParams,
}) {
  return (
    <div className="filter">
      <h3 className="filter__title">{filterName}</h3>
      <ul className="filter__filter-list">
        {filterItems.map((filterItem) => (
          <FilterItem
            filterItem={filterItem}
            key={filterItem.id}
            parentkeyEn={parentkeyEn}
            parentkeyRu={parentkeyRu}
            parentbody={parentbody}
            onFormValuesChange={onFormValuesChange}
            temporaryRequestParams={temporaryRequestParams}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
