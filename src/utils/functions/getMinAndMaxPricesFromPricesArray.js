const getPricesArrayFromProductsArray = (products) => {
  return products.map((item) => item.price_per_unit);
};

export const getMinAndMaxPricesFromPricesArray = (products) => {
  const prices = getPricesArrayFromProductsArray(products);
  const minAndMaxPricesArray = [
    Math.min.apply(null, prices),
    Math.max.apply(null, prices),
  ];
  return minAndMaxPricesArray;
};
