const stylizePrice = (price) => {
  const priceString = price.toString();
  return `${priceString[0]} ${priceString.slice(1)}`;
};

export default stylizePrice;
