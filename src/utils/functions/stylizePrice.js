const stylizePrice = (price) => {
  const priceString = price.toString();
  if (priceString.length < 4) {
    return priceString;
  }
  return `${priceString.slice(0, priceString.length - 3)} ${priceString.slice(
    priceString.length - 3
  )}`;
};

export default stylizePrice;
