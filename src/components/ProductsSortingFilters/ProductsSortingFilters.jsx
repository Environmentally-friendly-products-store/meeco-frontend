import './ProductsSortingFilters.css';

import { useState } from 'react';

function ProductsSortingFilters({
  requestParams,
  sortProductsInAscendingOrder,
  sortProductsInDescendingOrder,
  sortProductsByPrice,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFiltersVisability = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`products-sorting-filters ${
        isExpanded ? 'products-sorting-filters_expanded' : ''
      }`}
    >
      <div
        className="products-sorting-filters__title-container"
        onClick={toggleFiltersVisability}
      >
        <h3 className="products-sorting-filters__title">Сортировать</h3>
        <button
          className={`products-sorting-filters__chevron ${
            isExpanded ? 'products-sorting-filters__chevron_expanded' : ''
          } selectable-button`}
        ></button>
      </div>

      <div
        className={`products-sorting-filters__filters ${
          isExpanded ? 'products-sorting-filters__filters_expanded' : ''
        }`}
      >
        <button
          className="products-sorting-filters__filter selectable-button"
          type="button"
        >
          По убыванию цены
        </button>
        <button
          className="products-sorting-filters__filter selectable-button"
          type="button"
        >
          По возрастанию цены
        </button>
        <button
          className="products-sorting-filters__filter selectable-button"
          type="button"
        >
          По алфавиту
        </button>
      </div>
    </aside>
  );
}

export default ProductsSortingFilters;
