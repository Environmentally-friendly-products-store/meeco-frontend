import './Catalog.css';

import { useContext, useEffect, useState } from 'react';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';

import {
  getAllCategories,
  getProducts,
  sortProductsInAscendingOrder,
  sortProductsInDescendingOrder,
  sortProductsInAlphabeticalOrder,
} from '../../utils/productsApi';

import CardSection from '../CardSection/CardSection';
import AllFiltersSection from '../AllFiltersSection/AllFiltersSection';
import CategoriesFilters from '../CategoriesSection/CategoriesSection';
import LesserFilters from '../LesserFilters/LesserFilters';
import ProductsSortingFilters from '../ProductsSortingFilters/ProductsSortingFilters';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { trackCatalog } from '../../utils/yandexCounter';

import { FILTERS_TO_GET_All_PRODUCTS, PAGE_LIMIT } from '../../utils/constants';

import { IsCatalogButtonClickedContext } from '../../contexts/IsCatalogButtonClickedContext';

function Catalog() {
  const [counter, setCounter] = useState(1);

  const [productsAmount, setProductsAmount] = useState(0);

  const [requestParams, setRequestParams] = useState(
    FILTERS_TO_GET_All_PRODUCTS
  );

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
      setRequestParams(query);
      const response = await getProducts(query);
      const newProductsAmount = response.count;
      setProductsAmount(newProductsAmount);
      const newProducts = response.results;
      setProducts(newProducts);
      trackCatalog(newProducts);
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

  const setInitialProducts = (requestParams) => {
    return getProductFunc(requestParams, null, 'Все');
  };

  const onCategoryButtonClick = (name) => {
    return getProductFunc({ ...requestParams, category: name }, 1);
  };

  const onLesserFiltersButtonClick = (newRequestParams) => {
    setRequestParams({
      ...requestParams,
      newRequestParams,
    });
  };

  const onApplyLesserFilters = (newRequestParams) => {
    return getProductFunc({ ...requestParams, newRequestParams }, 1);
  };

  const onResetClick = async () => {
    try {
      setCounter(1);
      setRequestParams(FILTERS_TO_GET_All_PRODUCTS);
      setInitialProducts(FILTERS_TO_GET_All_PRODUCTS);
    } catch (err) {
      console.log(err);
    }
  };

  const onShowMoreButtonClick = async () => {
    try {
      setCounter(counter + 1);
      const response = await getProducts({
        ...requestParams,
        page: counter + 1,
      });
      const newProducts = response.results;
      setProducts([...products, ...newProducts]);
      trackCatalog(newProducts);
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

        <AllFiltersSection>
          <CategoriesFilters
            onCategoryButtonClick={onCategoryButtonClick}
            categories={categories}
            onResetClick={onResetClick}
          />

          <ProductsSortingFilters
            requestParams={requestParams}
            sortProductsInAscendingOrder={sortProductsInAscendingOrder}
            sortProductsInDescendingOrder={sortProductsInDescendingOrder}
            sortProductsByPrice={sortProductsInAlphabeticalOrder}
          />

          <LesserFilters
            requestParams={requestParams}
            onLesserFiltersButtonClick={onLesserFiltersButtonClick}
            onApplyLesserFilters={onApplyLesserFilters}
          />
        </AllFiltersSection>

        <CardSection
          requiredLength={PAGE_LIMIT * counter}
          products={products}
        />
        {(counter + 1) * PAGE_LIMIT <= productsAmount &&
          products.length % PAGE_LIMIT === 0 && (
            <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
          )}
      </main>
    </ActiveItemContext.Provider>
  );
}

export default Catalog;
