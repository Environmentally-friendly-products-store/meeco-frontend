import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import Carousel from '../Carousel/Carousel';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

function PopularProducts() {
  const { popular } = useContext(ProductsContext);

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
            brand={product.brand}
            card={product}
            id={product.id}
          />
        ))}
      </Carousel>
    </article>
  );
}

export default PopularProducts;
