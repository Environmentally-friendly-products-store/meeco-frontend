import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';
import { sortProducts } from '../../utils/functions/sortProducts';
import Carousel from '../Carousel/Carousel';

function PopularProducts({ isUsedOnMainPage, requiredLength, onCardClick }) {
  const products = sortProducts(temporaryProductsArray, requiredLength);

  return (
    <article className="popular-products">
      <Carousel slidesToShow={3} slidesToScroll={1}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            isUsedOnMainPage={isUsedOnMainPage}
            sectionWhereUsed={'popular'}
            price={product.price_per_unit}
            image={product.image_1_big}
            name={product.name}
            brand={product.brand}
            card={product}
            onCardClick={onCardClick}
          />
        ))}
      </Carousel>
    </article>
  );
}

export default PopularProducts;
