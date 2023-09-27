import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';
import encodeObjToQuery from './functions/encodeObjToQuery';

// отправляет запрос на сервер по baseUrl
const makeRequest = createMakeRequest(baseUrl);

/**
 * Запрашивает данные о всех категориях товаров
 */
export const getAllCategories = () => {
  makeRequest('/categories', 'GET');
};

/**
 * Запрашивает конкретную категории товаров по id
 */
export const getCategoryById = (categoryId) => {
  makeRequest(`/categories/${categoryId}`, 'GET');
};

/**
 * Запрашивает данные о товарах по указанным параметрам
 * @param data {{event: string, category: string, limit: number, page: number}} Объект с данными фильтра
 */
export const getProducts = (data) => {
  const params = encodeObjToQuery(data);
  return makeRequest(`/products/?${params}`, 'GET');
};

/**
 * Запрашивает данные о конкретном товаре по id
 */
export const getProductById = (productId) => {
  makeRequest(`/products/${productId}`, 'GET');
};

/**
 * Добавляет товар в корзину
 */
export const addProductToShoppingCart = (productId) => {
  makeRequest(`/products/${productId}/shopping_cart`, 'POST');
};

/**
 * Изменяет количество товара в корзине
 */
export const changeProductQuantityInShoppingCart = (productId, count) => {
  makeRequest(`/products/${productId}/shopping_cart`, 'PATCH', {
    amount: count,
  });
};

/**
 * Удаляет товар из корзины
 */
export const deleteProductFromShoppingCart = (productId) => {
  makeRequest(`/products/${productId}/shopping_cart`, 'DELETE');
};

/**
 * Получение новинок товаров
 */
export const getNovelties = () => {
  const data = {
    limit: 4,
    event: 'novinki',
  };
  return getProducts(data).then((response) => response.results);
};
