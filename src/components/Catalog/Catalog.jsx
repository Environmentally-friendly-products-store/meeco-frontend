import './Catalog.css';

import { useState, useEffect } from 'react';

import { getAllCategories, getProducts } from '../../utils/productsApi';

import CardSection from '../CardSection/CardSection';
import CatalogCardSection from '../CatalogCardSection/CatalogCardSection';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import FiltersSection from '../FiltersSection/FiltersSection';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import { PAGE_LIMIT } from '../../utils/constants';

function Catalog({ onCardClick }) {
  const [counter, setCounter] = useState(1);

  const [productsAmount, setProductsAmount] = useState(0);

  const [filters, setFilters] = useState({
    page: 1,
    limit: PAGE_LIMIT,
  });

  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const setInitialCategories = async () => {
    try {
      const categories = await getAllCategories();
      setCategories(categories);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  const setInitialProducts = async () => {
    try {
      const response = await getProducts(filters);
      const initialProductsAmount = response.count;
      setProductsAmount(initialProductsAmount);
      const initialProducts = response.results;
      setProducts(initialProducts);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  const onFilterButtonClick = async (name) => {
    try {
      setCounter(1);
      setFilters({ ...filters, category: name });
      const response = await getProducts({ ...filters, category: name });
      const newProductsAmount = response.count;
      setProductsAmount(newProductsAmount);
      const newProducts = response.results;
      setProducts(newProducts);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  const onResetClick = async () => {
    try {
      setCounter(1);
      setFilters({
        page: 1,
        limit: PAGE_LIMIT,
      });
      const response = await getProducts({
        page: 1,
        limit: PAGE_LIMIT,
      });

      const newProductsAmount = response.count;
      setProductsAmount(newProductsAmount);
      const allProducts = response.results;
      setProducts(allProducts);
    } catch (err) {
      console.log(err.error.detail);
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

  useEffect(() => {
    setInitialCategories();
    setInitialProducts();
  }, []);

  return (
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
      {(filters.page + 1) * PAGE_LIMIT <= productsAmount &&
        products.length % PAGE_LIMIT === 0 && (
          <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
        )}
    </main>
  );
}

export default Catalog;
