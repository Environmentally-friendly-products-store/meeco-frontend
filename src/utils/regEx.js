// export const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+\.[A-Z]{2,4}$/i;
export const REGEX_EMAIL =
  /^[a-zA-Z0-9](?!.*[._-]{2})[a-zA-Z0-9._-]{0,48}[a-zA-Z0-9](?<![-._])@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,59}[a-zA-Z]{0,3})$/i;
// export const REGEX_NAME = /^[\p{L} ,.'-]+$/u;
export const REGEX_NAME = /^[а-яА-Яa-zA-Z\-]+$/;
// export const REGEX_PASSWORD =
//   /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/;
export const REGEX_PASSWORD =
  /^[a-zA-Z](?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]+$/;
export const REGEX_PHONE = /^(8|\+7)\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;
