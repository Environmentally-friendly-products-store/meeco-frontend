import './LesserFilters.css';

import { useState, useContext } from 'react';

import { FiltersContext } from '../../contexts/FiltersContext';

function LesserFilters({
  onApplyLesserFilters,
  requestParams,
  changeRequestParams,
  chosenFiltersOnPanel,
  deleteFilterFromPanel,
  onFiltersPopupOpen,
}) {
  /* const {
    requestParams,
    changeRequestParams,
    chosenFiltersOnPanel,
    deleteFilterFromPanel,
    onFiltersPopupOpen,
  } = useContext(FiltersContext); */

  return (
    <aside className="lesser-filters">
      <button
        className="lesser-filters__open-filters-button"
        onClick={onFiltersPopupOpen}
      >
        Фильтры
      </button>
      <ul className="lesser-filter__chosen-filters">
        {chosenFiltersOnPanel.map((filter, index) => (
          <li
            key={index}
            className="lesser-filter__chosen-filter"
            onClick={() => deleteFilterFromPanel(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default LesserFilters;
