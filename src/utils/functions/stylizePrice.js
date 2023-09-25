const stylizePrice = (price) => {
  const priceString = price.toString();
  if (priceString.length < 4) {
    return priceString;
  }
  return `${priceString[0]} ${priceString.slice(1)}`;
};

export default stylizePrice;
