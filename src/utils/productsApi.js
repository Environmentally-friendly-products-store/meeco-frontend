import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';

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
 */
export const getProducts = (params) => {
  makeRequest(`/products/?${params}`, 'GET');
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
