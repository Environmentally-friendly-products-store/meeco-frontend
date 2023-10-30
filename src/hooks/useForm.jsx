import React from 'react';
import {
  REGEX_EMAIL,
  REGEX_NAME,
  REGEX_PASSWORD,
  REGEX_PHONE,
} from '../utils/regEx.js';

function useForm(
  inputValues = {},
  useRegexp = true,
  formClass = '.popup__form'
) {
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
        'Пароль должен содержать латинские заглавные и строчные буквы, цифры',
    },
    newPassword: {
      regExp: REGEX_PASSWORD,
      validationError:
        'Пароль должен содержать латинские заглавные и строчные буквы, цифры',
    },
    contact_phone_number: {
      regExp: REGEX_PHONE,
      validationError: 'Некорректный номер',
    },
  };

  const checkPasswords = (values) => {
    if (!values.repeatedPassword) {
      return true;
    }
    const { password, newPassword, repeatedPassword } = values;
    return password === repeatedPassword || newPassword === repeatedPassword;
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
    const isFormValid = event.target.closest(formClass).checkValidity();
    const noErrors = Object.values({
      ...errors,
      [name]: event.target.validationMessage,
    }).every((err) => err.length === 0);
    setIsValid(matchPasswords && isFormValid && noErrors);

    if (!event.target.validationMessage && useRegexp) {
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
