import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { trackPromoView } from '../../utils/yandexCounter';

import Carousel from '../Carousel/Carousel';

function PopularProducts() {
  const { popular } = useContext(ProductsContext);

  if (popular.length > 0) {
    trackPromoView(popular, 'popular');
  }

  return (
    <article className="popular-products">
      <Carousel
        slidesToShow={4}
        slidesToScroll={1}
        showDots={false}
        componentName="popular-products"
      >
        {popular.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price_per_unit}
            image={product.preview_image}
            name={product.name}
            brand={product.brand.name}
            card={product}
            id={product.id}
          />
        ))}
      </Carousel>
    </article>
  );
}

export default PopularProducts;
