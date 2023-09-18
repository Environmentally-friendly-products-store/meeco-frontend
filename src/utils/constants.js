// Текст ошибки
export const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка.';
export const NOT_AUTHORIZED_MESSAGE =
  'Пользователя с указанными email или пароль не существует';
export const USER_WRONG_TOKEN_MESSAGE =
  'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';

// Код ошибки
export const HTTP_SERVER_ERROR = 500;
export const HTTP_BAD_REQUEST = 400;

export const HTTP_NOT_AUTHORIZED = 401;

// Задать baseUrl по умолчанию локально, либо из env-файла: REACT_APP_BASE_URL - название константы в env-файле
export const { REACT_APP_BASE_URL: baseUrl = '/api/v1' } = process.env;
