import './CatalogCardSection.css';
import ProductCard from '../ProductCard/ProductCard';
import { sortProducts } from '../../utils/functions/sortProducts';

function CatalogCardSection({
  isUsedOnMainPage,
  products,
  requiredLength,
  onCardClick,
}) {
  const sortedProducts = sortProducts(products, requiredLength);

  return (
    <article className="catalog-card-section">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          isUsedOnMainPage={isUsedOnMainPage}
          sectionWhereUsed={'catalog'}
          price={product.price_per_unit}
          image={product.image_1_big}
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
