export const InputNumbers = (value) => value.replace(/\D/g, '');

export const handleInputPhoneChange = (e) => {
  let phoneValue = InputNumbers(e.target.value);
  const selectionStart = e.target.selectionStart;
  let formatedValue = '';
  if (e.target.value.length !== selectionStart) {
    if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
      e.target.value = phoneValue;
    }
    return;
  }

  if (['7', '8', '9'].includes(phoneValue[0])) {
    const firstSymbol =
      phoneValue[0] === '7'
        ? '+7'
        : phoneValue[0] === '8'
        ? '8'
        : '+7 (' + phoneValue[0];
    formatedValue += firstSymbol;
    if (phoneValue.length > 1) {
      formatedValue += ' (' + phoneValue.substring(1, 4);
    }
    if (phoneValue.length >= 5) {
      formatedValue += ') ' + phoneValue.substring(4, 7);
    }
    if (phoneValue.length >= 8) {
      formatedValue += '-' + phoneValue.substring(7, 9);
    }
    if (phoneValue.length >= 10) {
      formatedValue += '-' + phoneValue.substring(9, 11);
    }
  } else {
    formatedValue = '+' + phoneValue.substring(0, 16);
  }
  e.target.value = formatedValue;
};

export const ResetPhoneInput = (e) => {
  const phoneValue = InputNumbers(e.target.value);
  if (e.keyCode === 8 && phoneValue.length === 1) {
    return (e.target.value = '');
  }
};
