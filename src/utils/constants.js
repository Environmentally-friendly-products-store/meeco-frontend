// Текст ошибки
export const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка.';
export const NOT_AUTHORIZED_MESSAGE =
  'Пользователя с указанными email или пароль не существует';
export const USER_WRONG_TOKEN_MESSAGE =
  'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';

// Код ошибки
export const HTTP_SERVER_ERROR = 500;
export const HTTP_BAD_REQUEST = 400;
export const HTTP_NO_CONTENT = 204;

export const HTTP_RESET_CONTENT = 205;
export const HTTP_NOT_AUTHORIZED = 401;

export const PAGE_LIMIT = 12;
export const FILTERS_TO_GET_All_PRODUCTS = {
  page: 1,
  limit: PAGE_LIMIT,
  category: [],
  brand: [],
};

// Задать baseUrl по умолчанию локально, либо из env-файла: REACT_APP_BASE_URL - название константы в env-файле
export const { REACT_APP_BASE_URL: baseUrl = '/api/v1' } = process.env;

const url = baseUrl.startsWith('http') ? new URL(baseUrl) : {};

export const { origin: serverHost = '' } = url;
