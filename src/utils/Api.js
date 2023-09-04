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
  if (!body.auth_token) {
    throw new EcomeError(HTTP_BAD_REQUEST, USER_WRONG_TOKEN_MESSAGE);
  }
  return { token: body.auth_token };
};

// необходимо согласовать endpoints с backend (пока указаны из таблицы в Miro)
/**
 * Регистрация пользовтаеля
 */
export const register = (firstName, lastName, email, password) =>
  makeRequest('/users', 'POST', {
    firstName,
    lastName,
    email,
    password,
  }).then(parseToken);

/**
 * Авторизация пользователя
 */
export const authorize = (email, password) =>
  makeRequest('/auth/token/login', 'POST', {
    password,
    email,
  }).then(parseToken);

/**
 * Запрос данных пользователя
 */
export const getUserProfile = (token) =>
  makeRequest('/users/me', 'GET', null, token);
