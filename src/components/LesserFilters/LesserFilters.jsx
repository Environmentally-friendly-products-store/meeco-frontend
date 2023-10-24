import './LesserFilters.css';

import { useState, useContext } from 'react';

import { FiltersContext } from '../../contexts/FiltersContext';

function LesserFilters({
  /* requestParams, */
  onLesserFiltersButtonClick,
  onApplyLesserFilters,
}) {
  const { requestParams, onFiltersPopupOpen } = useContext(FiltersContext);

  const [chosenFilters, setChosenFilters] = useState([]);
  /* const [isFiltersPopupOpen, setIFiltersPopupOpen] = useState([]); */

  /* const onFiltersPopupOpen = () => {
    setIFiltersPopupOpen(!isFiltersPopupOpen);
  }; */

  const addFilterToRequest = (filterToAdd) => {
    setChosenFilters([...chosenFilters, filterToAdd]);
  };

  const deleteFilterFromRequest = (filterToRemove) => {
    setChosenFilters(
      chosenFilters.filter((filter) => filter !== filterToRemove)
    );
  };

  return (
    <aside className="lesser-filters">
      <button
        className="lesser-filters__open-filters-button"
        onClick={onFiltersPopupOpen}
      >
        Фильтры
      </button>
      <ul className="lesser-filter__chosen-filters">
        {chosenFilters.map((filter, index) => (
          <li
            key={index}
            className="lesser-filter__chosen-filter"
            onClick={() => deleteFilterFromRequest(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>

      {/* <PopupWithFilters isFiltersPopupOpen={isFiltersPopupOpen} /> */}
    </aside>
  );
}

export default LesserFilters;
