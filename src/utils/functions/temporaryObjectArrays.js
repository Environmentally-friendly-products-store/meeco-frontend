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

export const createProductsArray = (quantity) => {
  let result = [];
  for (let i = 1; result.length < quantity; i++) {
    result.push({
      id: i,
      name: `Товар${i}`,
      description: `Описание товара${i}`,
      brand: `Бренд${i}`,
      price_per_unit: renderInteger(500, 5000),
      image_1_big: image,
    });
  }
  return result;
};

export const temporaryFiltersArray = createFilters(3);
export const temporaryProductsArray = createProductsArray(36);
