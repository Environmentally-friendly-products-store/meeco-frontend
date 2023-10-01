export const sortProducts = (products, requiredLength) => {
  let result = [];

  for (let i = 0; i < requiredLength; i += 1) {
    if (products[i] === undefined) {
      return result;
    }

    result = [...result, products[i]];
    result.sort((prev, next) => prev.name.localeCompare(next.name));
  }

  return result;
};
