import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';
import encodeObjToQuery from './functions/encodeObjToQuery';

// отправляет запрос на сервер по baseUrl
const makeRequest = createMakeRequest(baseUrl);

const getResults = (response) => response.results;

/**
 * Запрашивает конкретный товар по id
 */
export const getCurrentCard = (id, token = null) => {
  return makeRequest(`/products/${id}/`, 'GET', null, token);
};

/**
 * Запрашивает данные о всех категориях товаров
 */
export const getCategoriesList = () => {
  return makeRequest('/categories/', 'GET');
};

/**
 * Запрашивает данные о всех категориях товаров
 */
export const getBrandsList = () => {
  return makeRequest('/brands/', 'GET');
};

/**
 * Запрашивает конкретную категории товаров по id
 */
export const getCategoryById = (categoryId) => {
  makeRequest(`/categories/${categoryId}`, 'GET');
};

/**
 * Запрашивает данные о товарах по указанным параметрам
 * @param data {{event: string, category: string, brand: string, limit: number, page: number, is_in_shopping_cart: number, is_favorite: number}} Объект с данными фильтра
 * @param token {string}  Авторизационный токен
 */
export const getProducts = (data, token) => {
  const params = encodeObjToQuery(data);
  return makeRequest(`/products/?${params}`, 'GET', null, token);
};

/**
 * Запрашивает данные по переданным фильтрам и
 */
export const sortProductsInAscendingOrder = (filters) => {
  const data = {
    ...filters,
    is_sorted_in_ascending: 1 /* предположительное название фильтра */,
  };
  return getProducts(data).then(getResults);
};

/**
 * Запрашивает данные по переданным фильтрам и
 */
export const sortProductsInDescendingOrder = (filters) => {
  const data = {
    ...filters,
    is_sorted_in_descending: 1 /* предположительное название фильтра */,
  };
  return getProducts(data).then(getResults);
};

/**
 * Запрашивает данные по переданным фильтрам и
 */
export const sortProductsInAlphabeticalOrder = (filters) => {
  const data = {
    ...filters,
    is_sorted_in_alphabetical_order: 1 /* предположительное название фильтра */,
  };
  return getProducts(data).then(getResults);
};

/**
 * Запрашивает данные о конкретном товаре по id
 */
export const getProductById = (productId) => {
  makeRequest(`/products/${productId}/`, 'GET');
};

/**
 * Добавляет товар в корзину
 */
export const addProductToShoppingCart = (productId, token) =>
  makeRequest(`/products/${productId}/shopping_cart/`, 'POST', null, token);

/**
 * Изменяет количество товара в корзине
 */
export const changeProductQuantityInShoppingCart = (productId, amount, token) =>
  makeRequest(
    `/products/${productId}/shopping_cart/`,
    'PATCH',
    { amount },
    token
  );

/**
 * Удаляет товар из корзины
 */
export const deleteProductFromShoppingCart = (productId, token) =>
  makeRequest(`/products/${productId}/shopping_cart/`, 'DELETE', null, token);

/**
 * Получение новинок товаров
 */
export const getShoppingCart = (token) => {
  const data = { is_in_shopping_cart: 1, limit: 99999 };
  return getProducts(data, token).then(getResults);
};

export const getNovelties = () => {
  const data = {
    limit: 4,
    event: 'novinki',
  };
  return getProducts(data).then(getResults);
};

export const getPopularProducts = () => {
  const data = {
    limit: 10,
    event: 'populyarnoe',
  };
  return getProducts(data).then(getResults);
};

/**
 * Получение избранных товаров
 */
export const getFavourites = (token) => {
  const data = { is_favorite: 1, limit: 99999 };
  return getProducts(data, token).then(getResults);
};

/**
 * Добавление товара в избранное
 */
export const addToFavourites = (productId, token) =>
  makeRequest(`/products/${productId}/favorite/`, 'POST', null, token);

/**
 * Удаление товара из избранного
 */
export const deleteFromFavourites = (productId, token) =>
  makeRequest(`/products/${productId}/favorite/`, 'DELETE', null, token);
