import './FilterItem.css';

import { useEffect, useState, useCallback } from 'react';

function FilterItem({
  filterItem,
  onFormValuesChange,
  parentkeyEn,
  parentkeyRu,
  parentbody,
  temporaryRequestParams,
}) {
  const isFilterItemInRequest = useCallback(() => {
    return temporaryRequestParams[parentkeyEn].includes(filterItem.slug);
  }, [filterItem.slug, parentkeyEn, temporaryRequestParams]);

  const [isChecked, setIsChecked] = useState(isFilterItemInRequest());

  const onCheckboxChange = (isChecked) => {
    setIsChecked(isChecked);
    onFormValuesChange(
      filterItem,
      parentkeyEn,
      parentkeyRu,
      parentbody,
      isChecked
    );
  };

  useEffect(() => {
    setIsChecked(isFilterItemInRequest());
  }, [isFilterItemInRequest]);

  return (
    <li
      className="filter__filter-item filter-item filter-item__list-item filter-text"
      key={filterItem.id}
    >
      <label className="filter-item__checkbox-label">
        <input
          className="filter-item__invisible-checkbox"
          name={filterItem.name}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheckboxChange(e.target.checked)}
        />
        <span
          className={`filter-item__visible-checkbox ${
            isChecked ? 'filter-item__visible-checkbox_checked' : ''
          }`}
        ></span>
        <span>{filterItem.name}</span>
      </label>
    </li>
  );
}

export default FilterItem;
