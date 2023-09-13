import './Catalog.css';
import { useState /* useEffect */ } from 'react';

import CardSection from '../CardSection/CardSection';
import CatalogCardSection from '../CatalogCardSection/CatalogCardSection';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import FiltersSection from '../FiltersSection/FiltersSection';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

/* После фильтрации на стороне бекенда, мы будем получать объект с массивом карточек и отображать их на странцице. Сейчас используется филлер */

import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';

/* Данные о категориях будут приходить с базы, сейчас используется филлер */

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

const limit = 12;

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
          onCardClick={onCardClick}
        />
      </CardSection>
    </main>
  );
} */

function Catalog({ onCardClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const [counter, setCounter] = useState(1);

  const [filters, setFilters] = useState({
    page: counter,
    limit,
    categories: categories.map((category) => category.name),
  });

  const setItem = (item) => {
    setActiveItem(item);
  };

  const onFilterButtonClick = (name) => {
    const filtersCopy = { ...filters };
    filtersCopy.categories = [name];
    setFilters(filtersCopy);
    /* При клике на название категории будет отправляться запрос к серверу за карточками выбранной категории */
  };

  const onShowMoreButtonClick = () => {
    setCounter(counter + 1);
  };

  /* useEffect(() => {
    При первой загрузке компонента нам сразу нужно получить массив объектов всех категорий товаров. Здесь будет отправляться запрос к серверу.
  }, []); */

  return (
    <main className="catalog">
      <Breadcrumbs />

      <FiltersSection
        categories={categories}
        onFilterButtonClick={onFilterButtonClick}
        setItem={setItem}
        activeItem={activeItem}
      />

      <CardSection
        quantity={temporaryProductsArray.length}
        isUsedOnMainPage={false}
      >
        <CatalogCardSection
          isUsedOnMainPage={false}
          requiredLength={limit * counter}
          products={temporaryProductsArray}
          onCardClick={onCardClick}
        />
      </CardSection>
      {temporaryProductsArray.length > limit * counter && (
        <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
      )}
    </main>
  );
}

export default Catalog;
