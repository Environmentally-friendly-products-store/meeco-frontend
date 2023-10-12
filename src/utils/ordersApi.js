import { createMakeRequest } from './makeRequest';
import { baseUrl } from './constants';

const makeRequest = createMakeRequest(baseUrl);

export const createOrder = (orderData, token) =>
  makeRequest(`/orders/`, 'POST', orderData, token);
