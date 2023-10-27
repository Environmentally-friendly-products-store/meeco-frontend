import './Catalog.css';

import { useCallback, useContext, useEffect, useState } from 'react';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';

import {
  getCategoriesList,
  getProducts,
  sortProductsInAscendingOrder,
  sortProductsInDescendingOrder,
  sortProductsInAlphabeticalOrder,
} from '../../utils/productsApi';

import CardSection from '../CardSection/CardSection';
import AllFiltersSection from '../AllFiltersSection/AllFiltersSection';
import CategoriesFilters from '../CategoriesFilters/CategoriesFilters';
import LesserFilters from '../LesserFilters/LesserFilters';
import ProductsSortingFilters from '../ProductsSortingFilters/ProductsSortingFilters';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { FiltersContext } from '../../contexts/FiltersContext';

import { trackCatalog } from '../../utils/yandexCounter';

import { FILTERS_TO_GET_All_PRODUCTS, PAGE_LIMIT } from '../../utils/constants';

import { IsCatalogButtonClickedContext } from '../../contexts/IsCatalogButtonClickedContext';

function Catalog({
  requestParams,
  changeRequestParams,
  chosenFiltersOnPanel,
  deleteFilterFromPanel,
  onFiltersPopupOpen,
}) {
  /* Остается в этом компоненте */

  const [counter, setCounter] = useState(1);

  /* Остается в этом компоненте */

  /* const { requestParams, changeRequestParams } = useContext(FiltersContext); */

  const [productsAmount, setProductsAmount] = useState(0);

  /* Пока под вопросом */

  const [categories, setCategories] = useState([]);

  /* Остается в этом компоненте */

  const [products, setProducts] = useState([]);

  /* Остается в этом компоненте */

  const [activeItem, setActiveItem] = useState('');

  /* Остается в этом компоненте */

  const { isCatalogButtonClicked } = useContext(IsCatalogButtonClickedContext);

  /* Скорее всего придется перенести в App, чтобы передать через контекст в PopupWithFilters */
  const getProductsByParams = async (query, counter, item) => {
    try {
      if (item) {
        setItem(item);
      }

      if (counter) {
        setCounter(counter);
      }

      if (query !== FILTERS_TO_GET_All_PRODUCTS) {
        changeRequestParams(query);
      }
      const response = await getProducts(query);
      const newProductsAmount = response.count;
      setProductsAmount(newProductsAmount);
      const newProducts = response.results;
      setProducts(newProducts);
      trackCatalog(newProducts);
    } catch (err) {
      console.log(err);
    }
  };

  /* Пока под вопросом */
  const setCategoriesList = async () => {
    try {
      const categories = await getCategoriesList();
      setCategories(categories);
    } catch (err) {
      console.log(err);
    }
  };

  /* Пока под вопросом */
  const setInitialProducts = (requestParams) => {
    return getProductsByParams(requestParams, null, 'Все');
  };

  /* Скорее всего придется перенести в App и переименовать , чтобы передать через контекст в PopupWithFilters */

  const onCategoryButtonClick = (name) => {
    return getProductsByParams({ ...requestParams, category: name }, 1);
  };

  const onLesserFiltersButtonClick = (newRequestParams) => {
    changeRequestParams({
      ...requestParams,
      newRequestParams,
    });
  };

  const onApplyLesserFilters = (newRequestParams) => {
    return getProductsByParams({ ...requestParams, newRequestParams }, 1);
  };

  const onResetClick = async () => {
    try {
      setCounter(1);
      changeRequestParams(FILTERS_TO_GET_All_PRODUCTS);
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
    setCategoriesList();
    setInitialProducts(requestParams);
  }, [isCatalogButtonClicked, requestParams]);

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
            changeRequestParams={changeRequestParams}
            onApplyLesserFilters={onApplyLesserFilters}
            chosenFiltersOnPanel={chosenFiltersOnPanel}
            deleteFilterFromPanel={deleteFilterFromPanel}
            onFiltersPopupOpen={onFiltersPopupOpen}
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
