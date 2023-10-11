import { serverHost } from '../constants';

const defineImage = (image) => {
  if (image.startsWith('http')) {
    return image;
  }
  return `${serverHost}${image}`;
};

export default defineImage;
