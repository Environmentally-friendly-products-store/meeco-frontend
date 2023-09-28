const calculateTotalPrice = (setter) => {
  let result = 0;
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }
    if (key.startsWith('purchaseItem')) {
      result += JSON.parse(localStorage.getItem(key)).totalItemPrice;
    }
  }
  setter(result);
};

export default calculateTotalPrice;

/* export const calculateTotalPrice = (totalPriceObject) => {
  let sum = 0;
  for (const key in totalPriceObject) {
    sum += totalPriceObject[key];
  }
  return sum;
}; */
