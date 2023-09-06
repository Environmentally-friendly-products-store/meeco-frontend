import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';
import { sortProducts } from '../../utils/functions/sortProducts';
import Carousel from '../Carousel/Carousel';

function PopularProducts({ isUsedOnMainPage, requiredLength }) {
  const products = sortProducts(temporaryProductsArray, requiredLength);

  console.log(products);

  return (
    <article className="popular-products">
      <Carousel slidesToShow={3} slidesToScroll={1}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            isUsedOnMainPage={isUsedOnMainPage}
            sectionWhereUsed={'popular'}
            price={product.price}
            image={product.image}
            name={product.name}
            brand={product.brand}
          />
        ))}
      </Carousel>
    </article>
  );
}

export default PopularProducts;
