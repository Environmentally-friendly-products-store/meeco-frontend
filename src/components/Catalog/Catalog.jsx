import './Catalog.css';

import { useState /* useEffect */ } from 'react';

/* import { getAllCategories, getProducts } from '../../utils/productsApi'; */

/* import encodeObjToQuery from '../../utils/functions/encodeObjToQuery'; */

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

function Catalog({ onCardClick }) {
  /* const [categories, setCategories] = useState([]); */

  const [activeItem, setActiveItem] = useState(null);

  const [counter, setCounter] = useState(1);

  /* const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    is_favorited: 0,
    is_in_shopping_cart: 0,
  }); */

  const [filters, setFilters] = useState({
    page: counter,
    limit,
    categories: categories.map((category) => category.name),
  });

  /* const [products, setProducts] = useState([]); */

  /* const setAllCategories = async () => {
    try {
      const unfilteredCategories = await getAllCategories();
      const filteredCategories = unfilteredCategories.map(
        (category) => category.name
      );
      setCategories(filteredCategories);
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  }; */

  /* const setAllProducts = async () => {
    try {
      const products = await getProducts(encodeObjToQuery(filters)).results;
      setProducts(products);
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  }; */

  const setItem = (item) => {
    setActiveItem(item);
  };

  const onFilterButtonClick = async (name) => {
    const filtersCopy = { ...filters };
    filtersCopy.categories = [name];
    setFilters(filtersCopy);
    /* const products = await getProducts(encodeObjToQuery(filtersCopy)).results; */
    /* setProducts(products); */
  };

  const onShowMoreButtonClick = () => {
    setCounter(counter + 1);
  };

  /* useEffect(() => {
    setAllCategories();
    setAllProducts();
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
          /* products={products} */
          onCardClick={onCardClick}
        />
      </CardSection>
      {temporaryProductsArray.length > limit * counter && (
        <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
      )}
    </main>
  );
}

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

export default Catalog;
