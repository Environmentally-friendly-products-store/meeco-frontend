import { serverHost } from '../constants';
import fillerImage from '../../images/product_card_filler_image_s.jpg';

const defineImage = (image) => {
  if (image === null) {
    return fillerImage;
  } else if (image.startsWith('http')) {
    return image;
  } else {
    return `${serverHost}${image}`;
  }
};

export default defineImage;
