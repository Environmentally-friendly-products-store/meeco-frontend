import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';
import { getResults } from './productsApi';

const makeRequest = createMakeRequest(baseUrl);

export const createOrder = (orderData, token) =>
  makeRequest(`/orders/`, 'POST', orderData, token);

export const getOrders = (token) =>
  makeRequest('/orders/', 'GET', null, token).then(getResults);
