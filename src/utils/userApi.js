import { createMakeRequest, EcomeError } from './makeRequest';
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

/**
 * Регистрация пользовтаеля
 */
export const register = (firstName, lastName, email, password) =>
  makeRequest('/register/', 'POST', {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });

/**
 * Авторизация пользователя
 */
export const authorize = (email, password) =>
  makeRequest('/token/', 'POST', {
    password,
    email,
  }).then(parseToken);

/**
 * Запрос данных пользователя
 */
export const getUserProfile = (token) =>
  makeRequest('/users/me/', 'GET', null, token);

/**
 * Изменение данных пользователя
 */
export const changeUserDataById = (userId, userData, token) =>
  makeRequest(
    `/users/${userId}/`,
    'PATCH',
    {
      first_name: userData.firstName,
      last_name: userData.lastName,
      phone: userData.phone,
      delivery_address: userData.address,
    },
    token
  );

export const changeUserPassword = (newPassword, currentPassword, token) =>
  makeRequest(
    '/users/set_password/',
    'POST',
    { new_password: newPassword, current_password: currentPassword },
    token
  );
