// Константы для обработки 500-й ошибки
import {
  HTTP_BAD_REQUEST,
  HTTP_NOT_AUTHORIZED,
  HTTP_SERVER_ERROR,
  HTTP_NO_CONTENT,
  NOT_AUTHORIZED_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from './constants';

// Функция-коструктор для ошибок
export function EcomeError(code, error) {
  this._code = code;
  this.isValidationError = () => code === HTTP_BAD_REQUEST;
  this._parseValidationError = (error) => {
    const errorState = {};
    for (const [key, value] of Object.entries(error)) {
      errorState[key] = value.join(' ');
    }
    return errorState;
  };
  this._parseNotAuthorizedError = () => NOT_AUTHORIZED_MESSAGE;
  this._parseServerError = (error) => error;

  switch (code) {
    case HTTP_BAD_REQUEST:
      this.error = this._parseValidationError(error);
      break;
    case HTTP_NOT_AUTHORIZED:
      this.error = this._parseNotAuthorizedError(error);
      break;
    default:
      this.error = this._parseServerError(error);
  }
}

export const createMakeRequest =
  (baseUrl) =>
  (url, method, body = null, token = null) => {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${baseUrl}${url}`, options)
      .then((response) => {
        if (response.status === HTTP_NO_CONTENT || response.status === 205) {
          return;
        }
        return response.json().then((body) => {
          if (response.ok) {
            return body;
          }
          throw new EcomeError(response.status, body);
        });
      })
      .catch((error) => {
        if (error instanceof EcomeError) {
          throw error;
        }
        throw new EcomeError(HTTP_SERVER_ERROR, SERVER_ERROR_MESSAGE);
      });
  };
