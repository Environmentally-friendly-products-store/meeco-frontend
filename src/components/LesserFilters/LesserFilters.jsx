import './LesserFilters.css';

function LesserFilters({
  chosenFiltersOnPanel,
  deleteFilterFromPanel,
  deletePriceFromPanel,
  onClosePopupWithFilters,
}) {
  return (
    <aside className="lesser-filters">
      <button
        className="lesser-filters__open-filters-button"
        onClick={onClosePopupWithFilters}
      >
        Фильтры
      </button>

      <ul className="lesser-filter__chosen-filters">
        {chosenFiltersOnPanel.map((filter, index) => (
          <li key={index} className="lesser-filter__chosen-filter">
            <button
              className="lesser-filter__chosen-filter-button selectable-button"
              type="button"
              onClick={
                filter.parentkeyRu === 'Цена'
                  ? () => {
                      deletePriceFromPanel(
                        filter.parentkeyRu,
                        filter.sortingType
                      );
                    }
                  : () => {
                      deleteFilterFromPanel(filter, filter.parentkeyEn);
                    }
              }
            >
              {filter.parentkeyRu === 'Цена'
                ? filter.text
                  ? `${filter.parentkeyRu}: ${filter.text}`
                  : `${filter.parentkeyRu}: от ${filter.min_price} до ${filter.max_price}`
                : `${filter.parentkeyRu}: ${filter.name}`}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default LesserFilters;
