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
