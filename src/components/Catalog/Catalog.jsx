import './Catalog.css';

import { useState, useEffect, useContext } from 'react';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';

import { getAllCategories, getProducts } from '../../utils/productsApi';

import CardSection from '../CardSection/CardSection';
import CatalogCardSection from '../CatalogCardSection/CatalogCardSection';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import FiltersSection from '../FiltersSection/FiltersSection';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import { PAGE_LIMIT } from '../../utils/constants';

import { IsCatalogButtonClickedContext } from '../../contexts/IsCatalogButtonClickedContext';

const FILTERS_TO_GET_All_PRODUCTS = {
  page: 1,
  limit: PAGE_LIMIT,
};

function Catalog({ onCardClick }) {
  const [counter, setCounter] = useState(1);

  const [productsAmount, setProductsAmount] = useState(0);

  const [filters, setFilters] = useState(FILTERS_TO_GET_All_PRODUCTS);

  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const [activeItem, setActiveItem] = useState('');

  const { isCatalogButtonClicked } = useContext(IsCatalogButtonClickedContext);

  const getProductFunc = async (query, counter, item) => {
    try {
      if (item) {
        setItem(item);
      }

      if (counter) {
        setCounter(counter);
      }
      setFilters(query);
      const response = await getProducts(query);
      const newProductsAmount = response.count;
      setProductsAmount(newProductsAmount);
      const newProducts = response.results;
      setProducts(newProducts);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  const setInitialCategories = async () => {
    try {
      const categories = await getAllCategories();
      setCategories(categories);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  const setInitialProducts = (filters) => {
    return getProductFunc(filters, null, 'Все');
  };

  const onFilterButtonClick = (name) => {
    return getProductFunc({ ...filters, category: name }, 1);
  };

  const onResetClick = async () => {
    try {
      setCounter(1);
      setFilters(FILTERS_TO_GET_All_PRODUCTS);
      setInitialProducts(FILTERS_TO_GET_All_PRODUCTS);
    } catch (err) {
      console.log(err);
    }
  };

  const onShowMoreButtonClick = async () => {
    try {
      setCounter(counter + 1);
      const response = await getProducts({ ...filters, page: counter + 1 });
      const newProducts = response.results;
      setProducts([...products, ...newProducts]);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  const setItem = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    setInitialCategories();
    setInitialProducts(FILTERS_TO_GET_All_PRODUCTS);
  }, [isCatalogButtonClicked]);

  return (
    <ActiveItemContext.Provider value={{ activeItem, setItem }}>
      <main className="catalog">
        <Breadcrumbs />

        <FiltersSection
          categories={categories}
          onFilterButtonClick={onFilterButtonClick}
          onResetClick={onResetClick}
        />

        <CardSection isUsedOnMainPage={false}>
          <CatalogCardSection
            isUsedOnMainPage={false}
            requiredLength={PAGE_LIMIT * counter}
            products={products}
            onCardClick={onCardClick}
          />
        </CardSection>
        {(counter + 1) * PAGE_LIMIT <= productsAmount &&
          products.length % PAGE_LIMIT === 0 && (
            <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
          )}
      </main>
    </ActiveItemContext.Provider>
  );
}

export default Catalog;
