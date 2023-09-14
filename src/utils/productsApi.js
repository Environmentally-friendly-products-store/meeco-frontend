import { createMakeRequest } from './MakeRequest';
import { baseUrl } from './constants';

// отправляет запрос на сервер по baseUrl
const makeRequest = createMakeRequest(baseUrl);

/**
 * Запрашивает данные о всех категориях товаров
 */
export const getAllCategories = () => {
  makeRequest('/api/v1/categories', 'GET');
};

/**
 * Запрашивает конкретную категории товаров по id
 */
export const getCategoryById = (categoryId) => {
  makeRequest(`/api/v1/categories/${categoryId}`, 'GET');
};

/**
 * Запрашивает данные о товарах по указанным параметрам
 */
export const getProducts = (params) => {
  makeRequest(`/api/v1/products/?${params}`, 'GET');
};

/**
 * Запрашивает данные о конкретном товаре по id
 */
export const getProductById = (productId) => {
  makeRequest(`/api/v1/products/${productId}`, 'GET');
};

/**
 * Добавляет товар в корзину
 */
export const addProductToShoppingCart = (productId) => {
  makeRequest(`/api/v1/products/${productId}/shopping-cart`, 'POST');
};

/**
 * Изменяет количество товара в корзине
 */
export const changeProductQuantityInShoppingCart = (productId) => {
  makeRequest(`/api/v1/products/${productId}/shopping-cart`, 'PATCH');
};

/**
 * Удаляет товара из корзины
 */
export const deleteProductFromShoppingCart = (productId) => {
  makeRequest(`/api/v1/products/${productId}/shopping-cart`, 'DELETE');
};
