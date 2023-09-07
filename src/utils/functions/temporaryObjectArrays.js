import image from '../../images/product_card_filler_image_s.jpg';

const renderInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const createFilters = (quantity) => {
  let result = [];
  for (let i = 1; result.length < quantity; i++) {
    result.push({
      id: i,
      name: `Фильтр${i}`,
    });
  }
  return result;
};

const createProductsArray = (quantity) => {
  let result = [];
  for (let i = 1; result.length < quantity; i++) {
    result.push({
      id: i,
      price: renderInteger(500, 5000),
      image,
      name: `Товар${i}`,
      brand: `Бренд${i}`,
    });
  }
  return result;
};

export const temporaryFiltersArray = createFilters(3);
export const temporaryProductsArray = createProductsArray(30);
