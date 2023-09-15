import React from 'react';
import { REGEX_EMAIL, REGEX_NAME, REGEX_PASSWORD } from '../utils/regEx.js';

function useForm(inputValues = {}) {
  const [values, setValues] = React.useState(inputValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const validationSettings = {
    firstName: {
      regExp: REGEX_NAME,
      validationError: 'Некорректное имя',
    },
    lastName: {
      regExp: REGEX_NAME,
      validationError: 'Некорректная фамилия',
    },
    email: {
      regExp: REGEX_EMAIL,
      validationError: 'Некорректный адрес электронной почты',
    },
    password: {
      regExp: REGEX_PASSWORD,
      validationError:
        'Пароль должен содержать заглавные и строчные буквы, цифры, специальные символы',
    },
  };

  const checkPasswords = (values) => {
    if (!values.repeatedPassword) {
      return true;
    }
    const { password, repeatedPassword } = values;
    return password === repeatedPassword;
  };

  const checkValidation = (name, value) => {
    if (!validationSettings[name]) {
      return;
    }
    if (!validationSettings[name].regExp.test(value)) {
      setErrors({
        ...errors,
        [name]: validationSettings[name].validationError,
      });
      setIsValid(false);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    const matchPasswords = checkPasswords({ ...values, [name]: value });
    const isFormValid = event.target.closest('.popup__form').checkValidity();
    setIsValid(matchPasswords && isFormValid);

    if (!event.target.validationMessage) {
      checkValidation(name, value);
    }
  };

  return {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    setErrors,
    setIsValid,
  };
}

export default useForm;
