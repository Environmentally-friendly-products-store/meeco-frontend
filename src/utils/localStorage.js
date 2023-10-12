export const getLocalStorageToken = () => localStorage.getItem('token');
export const setLocalStorageToken = (token) =>
  localStorage.setItem('token', token);
export const removeLocalStorageToken = () => localStorage.removeItem('token');

export const setLocalStorageUser = (user) =>
  localStorage.setItem('user', JSON.stringify(user));
