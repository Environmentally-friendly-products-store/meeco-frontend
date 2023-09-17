import { createMakeRequest } from './MakeRequest';
import { baseUrl } from './constants';

const makeRequest = createMakeRequest(baseUrl);

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
