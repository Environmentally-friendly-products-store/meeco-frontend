import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';

const makeRequest = createMakeRequest(baseUrl);

export const getCurrentCard = (id) => {
  return makeRequest(`/products/${id}/`, 'GET', null);
};

export const addCardToShoppingCart = (id, token) => {
  return makeRequest(`/products/${id}/shopping_cart/`, 'POST', null, token);
};

export const changeAmountCardToShoppingCart = (id, count, token) => {
  return makeRequest(
    `/products/${id}/shopping_cart/`,
    'PATCH',
    {
      amount: count,
    },
    token
  );
};

export const deleteCardFromShoppingCart = (id, token) => {
  return makeRequest(`/products/${id}/shopping_cart/`, 'DELETE', null, token);
};
