import './CatalogCardSection.css';
import ProductCard from '../ProductCard/ProductCard';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';
import { sortProducts } from '../../utils/functions/sortProducts';

function CatalogCardSection({ isUsedOnMainPage, requiredLength, onCardClick }) {
  const products = sortProducts(temporaryProductsArray, requiredLength);

  return (
    <article className="catalog-card-section">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          isUsedOnMainPage={isUsedOnMainPage}
          sectionWhereUsed={'catalog'}
          price={product.price}
          image={product.image}
          name={product.name}
          brand={product.brand}
          card={product}
          onCardClick={onCardClick}
        />
      ))}
    </article>
  );
}

export default CatalogCardSection;
