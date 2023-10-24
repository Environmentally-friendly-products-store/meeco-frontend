import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';
import encodeObjToQuery from './functions/encodeObjToQuery';

// отправляет запрос на сервер по baseUrl
const makeRequest = createMakeRequest(baseUrl);

const getResults = (response) => response.results;

const getData = (response) => response.data;

/**
 * Запрашивает конкретный товар по id
 */
export const getCurrentCard = (id, token = null) => {
  return makeRequest(`/products/${id}/`, 'GET', null, token);
};

/**
 * Запрашивает данные о всех категориях товаров
 */
export const getAllCategories = () => {
  return makeRequest('/categories/', 'GET');
};

/**
 * Запрашивает конкретную категории товаров по id
 */
export const getCategoryById = (categoryId) => {
  makeRequest(`/categories/${categoryId}`, 'GET');
};

/**
 * Запрашивает данные о товарах по указанным параметрам
 * @param data {{event: string, category: string, limit: number, page: number, is_in_shopping_cart: number, is_favorite: number}} Объект с данными фильтра
 * @param token {string}  Авторизационный токен
 */
export const getProducts = (data, token) => {
  const params = encodeObjToQuery(data);
  return makeRequest(`/products/?${params}`, 'GET', null, token);
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
 * Получение корзины
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
    limit: 8,
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

/**
 * Получение корзины Cart
 */
export const getCart = (token) => {
  return makeRequest(`/cart/`, 'GET', null, token).then(getData);
};

/**
 * Добавляет товар в корзину Cart
 */
export const addProductToCart = (productId, token) =>
  makeRequest(
    `/cart/`,
    'POST',
    {
      product: productId,
    },
    token
  );

/**
 * Изменяет количество товара в корзине Cart
 */
export const changeProductQuantityInCart = (productId, amount, token) =>
  makeRequest(`/cart/${productId}/`, 'PATCH', { amount }, token);

/**
 * Удаляет товар из корзины Cart
 */
export const deleteProductFromCart = (productId, token) =>
  makeRequest(`/cart/${productId}/`, 'DELETE', null, token);
