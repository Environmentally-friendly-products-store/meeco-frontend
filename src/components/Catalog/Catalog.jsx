import './Catalog.css';
import { useState } from 'react';

import CardSection from '../CardSection/CardSection';
import CatalogCardSection from '../CatalogCardSection/CatalogCardSection';
import FiltersSection from '../FiltersSection/FiltersSection';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';

const categories = [
  {
    id: 0,
    name: 'Новинки',
  },
  {
    id: 1,
    name: 'Уход и красота',
  },
  {
    id: 2,
    name: 'Для дома',
  },
  {
    id: 3,
    name: 'Еда и напитки',
  },
];

/* function Catalog() {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    categories: [],
  });

  const onFiltersChange = (name, isChecked) => {
    const filtersCopy = { ...filters };

    if (isChecked) {
      filtersCopy.categories.push(name);
    } else {
      const index = filtersCopy.categories.indexOf(name);
      filtersCopy.categories.splice(index, 1);
    }
    setFilters(filtersCopy);
  };

  return (
    <main className="catalog">
      <FiltersSection
        categories={categories}
        onFiltersChange={onFiltersChange}
      />

      <CardSection
        filters={filters}
        quantity={temporaryProductsArray.length}
        isUsedOnMainPage={false}
      >
        <CatalogCardSection
          isUsedOnMainPage={false}
          requiredLength={12}
          products={temporaryProductsArray}
        />
      </CardSection>
    </main>
  );
} */

function Catalog() {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    categories: categories.map((category) => category.name),
  });

  const onButtonClick = (name) => {
    const filtersCopy = { ...filters };
    filtersCopy.categories = [name];
    setFilters(filtersCopy);
    /* тут будет отправляться запрос к серверу за карточками нужной категории */
  };

  console.log(filters);
  return (
    <main className="catalog">
      <FiltersSection categories={categories} onButtonClick={onButtonClick} />

      <CardSection
        quantity={temporaryProductsArray.length}
        isUsedOnMainPage={false}
      >
        <CatalogCardSection
          isUsedOnMainPage={false}
          requiredLength={12}
          products={temporaryProductsArray}
        />
      </CardSection>
    </main>
  );
}

export default Catalog;
