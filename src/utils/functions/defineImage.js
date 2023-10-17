import { serverHost } from '../constants';
import noImage from '../../images/no-image.jpg';

const defineImage = (image) => {
  if (image === null) {
    return noImage;
  }
  if (image.startsWith('http')) {
    return image;
  }
  return `${serverHost}${image}`;
};

export default defineImage;
