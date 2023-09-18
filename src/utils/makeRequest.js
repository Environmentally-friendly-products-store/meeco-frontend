// Константы для обработки 500-й ошибки
import { HTTP_SERVER_ERROR, SERVER_ERROR_MESSAGE } from './constants';

// Функция-коструктор для ошибок
export function EcomeError(code, error) {
  this.code = code;
  this.error = error;
}

export const createMakeRequest =
  (baseUrl) =>
  (url, method, body, token = null) => {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${baseUrl}${url}`, options)
      .then((response) =>
        response.json().then((body) => {
          if (response.ok) {
            return body;
          }
          throw new EcomeError(response.status, body);
        })
      )
      .catch((error) => {
        if (error instanceof EcomeError) {
          throw error;
        }
        throw new EcomeError(HTTP_SERVER_ERROR, SERVER_ERROR_MESSAGE);
      });
  };
