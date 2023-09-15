import { createMakeRequest, EcomeError } from './MakeRequest';
import {
  baseUrl,
  HTTP_BAD_REQUEST,
  USER_WRONG_TOKEN_MESSAGE,
} from './constants';

// отправляет запрос на сервер по baseUrl
const makeRequest = createMakeRequest(baseUrl);

// извлекает token из тела ответа
const parseToken = (body) => {
  if (!body.access) {
    throw new EcomeError(HTTP_BAD_REQUEST, USER_WRONG_TOKEN_MESSAGE);
  }
  return { token: body.access };
};

//  endpoints взяты из Swagger
/**
 * Регистрация пользовтаеля
 */
export const register = (firstName, lastName, email, password) =>
  makeRequest('/users', 'POST', {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });

/**
 * Авторизация пользователя
 */
export const authorize = (email, password) =>
  makeRequest('/jwt/create', 'POST', {
    password,
    email,
  }).then(parseToken);

/**
 * Запрос данных пользователя
 */
export const getUserProfile = (token) =>
  makeRequest('/users/me', 'GET', null, token);

export const getCurrentCard = (id) => {
  makeRequest(`/products/${id}`, 'GET', null);
};

export const addCardToShoppingCart = (id) => {
  makeRequest(`/product/${id}/shopping_cart`, 'POST', null);
};

export const changeAmountCardToShoppingCart = (id, count) => {
  makeRequest(`/product/${id}/shopping_cart`, 'PATCH', {
    amount: count,
  });
};

export const deleteCardToShoppingCart = (id) => {
  makeRequest(`/product/${id}/shopping_cart`, 'DELETE', null);
};

//  Получить данные конкретной карточки товара
//
// export const getCurrentCard = (id) => {
//   return fetch('./productRequest.json', {
//     method: 'GET'
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     else {
//       Promise.reject(`Error: ${res.status}`)
//     }
//   })
// }
// Добавить товар в корзину через страницу товара
// export const addCardToShoppingCart = (id) => {
//   return fetch('./shopingCartRequest.json', {
//     method: 'GET'
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     else {
//       Promise.reject(`Error: ${res.status}`)
//     }
//   })
// }
// // Изменить количество товара в корзину
// export const changeAmountCardToShoppingCart = (id, count) => {
//   return fetch('./shoppingCartPatchAmount.json', {
//     method: 'GET',
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     else {
//       Promise.reject(`Error: ${res.status}`)
//     }
//   })
// }
