import './Novelties.css';
import ProductCard from '../ProductCard/ProductCard';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';
import { sortProducts } from '../../utils/functions/sortProducts';

function Novelties({ isUsedOnMainPage, requiredLength }) {
  const products = sortProducts(temporaryProductsArray, requiredLength);

  return (
    <article className="novelties">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          isUsedOnMainPage={isUsedOnMainPage}
          sectionWhereUsed={'novelty'}
          price={product.price}
          image={product.image}
          name={product.name}
          brand={product.brand}
        />
      ))}
    </article>
  );
}

export default Novelties;
