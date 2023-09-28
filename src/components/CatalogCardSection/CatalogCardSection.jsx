import './CatalogCardSection.css';
import ProductCard from '../ProductCard/ProductCard';

import { sortProducts } from '../../utils/functions/sortProducts';

function CatalogCardSection({ products, requiredLength }) {
  const sortedProducts = sortProducts(products, requiredLength);

  return (
    <article className="catalog-card-section">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          price={product.price_per_unit}
          image={product.preview_image}
          name={product.name}
          brand={product.brand}
          card={product}
          id={product.id}
          /* isInShoppingCart={product.is_in_shopping_cart} */
        />
      ))}
    </article>
  );
}

export default CatalogCardSection;
