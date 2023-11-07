import './ProductsSortingFilters.css';

function ProductsSortingFilters({
  isSortingExpanded,
  setIsSortingExpanded,
  toggleSortingVisability,
  requestParams,
  chosenFiltersOnPanel,
  setChosenFiltersOnPanel,
  setTemporaryFiltersToSetToPanel,
  sortProductsInAscendingOrder,
  sortProductsInDescendingOrder,
}) {
  const onSortingButtonClick = (sortingType, parentkeyRu, text) => {
    if (sortingType === '-') {
      sortProductsInAscendingOrder(requestParams);
    } else {
      sortProductsInDescendingOrder(requestParams);
    }

    let newChosenFilters;

    if (
      chosenFiltersOnPanel.find((filter) =>
        filter.hasOwnProperty('sortingType')
      )
    ) {
      console.log(chosenFiltersOnPanel);
      newChosenFilters = chosenFiltersOnPanel.map((filter) => {
        return filter.hasOwnProperty('sortingType')
          ? { parentkeyRu, sortingType, text }
          : filter;
      });
    } else {
      newChosenFilters = [
        ...chosenFiltersOnPanel,
        { parentkeyRu, sortingType, text },
      ];
    }
    setTemporaryFiltersToSetToPanel(newChosenFilters);
    setChosenFiltersOnPanel(newChosenFilters);
    setIsSortingExpanded(false);
  };

  return (
    <aside
      className={`products-sorting-filters ${
        isSortingExpanded ? 'products-sorting-filters_expanded' : ''
      }`}
    >
      <div
        className="products-sorting-filters__title-container"
        onClick={toggleSortingVisability}
      >
        <h3 className="products-sorting-filters__title">Сортировать</h3>
        <button
          className={`products-sorting-filters__chevron ${
            isSortingExpanded
              ? 'products-sorting-filters__chevron_expanded'
              : ''
          } selectable-button`}
        ></button>
      </div>

      <div
        className={`products-sorting-filters__filters ${
          isSortingExpanded ? 'products-sorting-filters__filters_expanded' : ''
        }`}
      >
        <button
          className="products-sorting-filters__filter selectable-button"
          type="button"
          onClick={() => {
            onSortingButtonClick('-', 'Цена', 'по убыванию');
          }}
        >
          По убыванию цены
        </button>
        <button
          className="products-sorting-filters__filter selectable-button"
          type="button"
          onClick={() => {
            onSortingButtonClick('+', 'Цена', 'по возрастанию');
          }}
        >
          По возрастанию цены
        </button>
      </div>
    </aside>
  );
}

export default ProductsSortingFilters;
