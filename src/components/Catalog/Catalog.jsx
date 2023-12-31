import './Catalog.css';

import { useCallback, useEffect, useState } from 'react';

import { getCategoriesList, getProducts } from '../../utils/productsApi';

import CardSectionWithTitle from '../CardSectionWithTitle/CardSectionWithTitle';
import CardSection from '../CardSection/CardSection';
import AllFiltersSection from '../AllFiltersSection/AllFiltersSection';
import CategoriesFilters from '../CategoriesFilters/CategoriesFilters';
import LesserFilters from '../LesserFilters/LesserFilters';
import ProductsSortingFilters from '../ProductsSortingFilters/ProductsSortingFilters';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import { trackCatalog } from '../../utils/yandexCounter';

import { FILTERS_TO_GET_All_PRODUCTS, PAGE_LIMIT } from '../../utils/constants';

function Catalog({
  filteredProducts,
  setFilteredProducts,
  activeCategoryItems,
  setActiveCategoryItems,
  requestParams,
  setRequestParams,
  chosenFiltersOnPanel,
  setChosenFiltersOnPanel,
  deleteFilterFromPanel,
  deletePriceFromPanel,
  setTemporaryRequestParams,
  setTemporaryFiltersToSetToPanel,
  resetFilters,
  onClosePopupWithFilters,
}) {
  const [counter, setCounter] = useState(1);

  const [productsAmount, setProductsAmount] = useState(0);

  const [categories, setCategories] = useState([]);

  const [isSortingExpanded, setIsSortingExpanded] = useState(false);

  const toggleSortingVisability = () => {
    setIsSortingExpanded(!isSortingExpanded);
  };

  const onCloseByOverlayClick = (event) => {
    if (
      !event.target.classList.contains('products-sorting-filters_expanded') &&
      !event.target.classList.contains('products-sorting-filters__filter') &&
      !event.target.classList.contains(
        'products-sorting-filters__title-container'
      ) &&
      !event.target.classList.contains(
        'products-sorting-filters__filters_expanded'
      ) &&
      !event.target.classList.contains('products-sorting-filters__title') &&
      !event.target.classList.contains(
        'products-sorting-filters__chevron_expanded'
      )
    ) {
      setIsSortingExpanded(false);
    }
  };

  const getProductsByParams = useCallback(
    async (query) => {
      try {
        if (query !== FILTERS_TO_GET_All_PRODUCTS) {
          setRequestParams(query);
          setTemporaryRequestParams(query);
        }
        const response = await getProducts(query);
        const newProductsAmount = response.count;
        setProductsAmount(newProductsAmount);
        const newProducts = response.results;
        setFilteredProducts(newProducts);
        trackCatalog(newProducts);
      } catch (err) {
        console.log(err);
      }
    },
    [setFilteredProducts, setRequestParams, setTemporaryRequestParams]
  );

  const setCategoriesList = async () => {
    try {
      const categories = await getCategoriesList();
      setCategories(categories);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProducts = useCallback(
    (requestParams) => {
      return getProductsByParams(requestParams);
    },
    [getProductsByParams]
  );

  const onCategoryButtonClick = (categoryName) => {
    if (requestParams.category.includes(categoryName)) {
      deleteCategoryValue(categoryName);
    } else {
      addCategoryValue(categoryName);
    }
  };

  const addCategoryValue = (categoryName) => {
    const newValues = {
      ...requestParams,
      category: [...requestParams.category, categoryName],
    };
    return getProductsByParams({ ...requestParams, ...newValues });
  };

  const deleteCategoryValue = (categoryName) => {
    const requestParamsCopy = { ...requestParams };
    const newRequestParams = requestParamsCopy.category.filter(
      (item) => item !== categoryName
    );
    requestParamsCopy.category = newRequestParams;
    return getProductsByParams({ ...requestParams, ...requestParamsCopy });
  };

  const sortProductsInAscendingOrder = (requestParams) => {
    setRequestParams({ ...requestParams, ordering: '-price_per_unit' });
  };

  const sortProductsInDescendingOrder = (requestParams) => {
    setRequestParams({ ...requestParams, ordering: 'price_per_unit' });
  };

  const onResetClick = async () => {
    try {
      setCounter(1);
      resetFilters();
      renderProducts(FILTERS_TO_GET_All_PRODUCTS);
    } catch (err) {
      console.log(err);
    }
  };

  const addItemToActiveItems = (itemName) => {
    return [...activeCategoryItems, itemName];
  };

  const deleteItemFromActiveItems = (itemName) => {
    return activeCategoryItems.filter((item) => item !== itemName);
  };

  const handleCategoryItemClick = (itemName) => {
    let newActiveItems;
    if (activeCategoryItems.includes(itemName)) {
      newActiveItems = deleteItemFromActiveItems(itemName);
    } else {
      newActiveItems = addItemToActiveItems(itemName);
    }
    setActiveCategoryItems(newActiveItems);
  };

  const onShowMoreButtonClick = async () => {
    try {
      setCounter(counter + 1);
      const response = await getProducts({
        ...requestParams,
        page: counter + 1,
      });
      const newProducts = response.results;
      setFilteredProducts([...filteredProducts, ...newProducts]);
      trackCatalog(newProducts);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  useEffect(() => {
    setCounter(1);
    setCategoriesList();
    renderProducts(requestParams);
  }, [requestParams, renderProducts]);

  return (
    <main className="catalog" onMouseDown={onCloseByOverlayClick}>
      <Breadcrumbs />
      <AllFiltersSection>
        <CategoriesFilters
          activeCategoryItems={activeCategoryItems}
          setActiveCategoryItems={setActiveCategoryItems}
          handleCategoryItemClick={handleCategoryItemClick}
          onCategoryButtonClick={onCategoryButtonClick}
          categories={categories}
          onResetClick={onResetClick}
        />

        <ProductsSortingFilters
          isSortingExpanded={isSortingExpanded}
          setIsSortingExpanded={setIsSortingExpanded}
          toggleSortingVisability={toggleSortingVisability}
          requestParams={requestParams}
          chosenFiltersOnPanel={chosenFiltersOnPanel}
          setChosenFiltersOnPanel={setChosenFiltersOnPanel}
          setTemporaryFiltersToSetToPanel={setTemporaryFiltersToSetToPanel}
          sortProductsInAscendingOrder={sortProductsInAscendingOrder}
          sortProductsInDescendingOrder={sortProductsInDescendingOrder}
        />

        <LesserFilters
          requestParams={requestParams}
          setRequestParams={setRequestParams}
          chosenFiltersOnPanel={chosenFiltersOnPanel}
          deleteFilterFromPanel={deleteFilterFromPanel}
          deletePriceFromPanel={deletePriceFromPanel}
          onClosePopupWithFilters={onClosePopupWithFilters}
        />
      </AllFiltersSection>

      {filteredProducts.length === 0 && chosenFiltersOnPanel.length > 0 ? (
        <CardSectionWithTitle
          title={'По вашему запросу товаров не найдено'}
          additionalStyles={'card-section-with-title_style_catalog'}
        >
          <p className="search__text">
            Попробуйте отменить некоторые фильтры или сбросить все
          </p>
        </CardSectionWithTitle>
      ) : (
        <>
          <CardSection
            requiredLength={PAGE_LIMIT * counter}
            products={filteredProducts}
          />
          {counter * PAGE_LIMIT < productsAmount && (
            <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
          )}
        </>
      )}
    </main>
  );
}

export default Catalog;
