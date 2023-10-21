import './CardSection.css';
import ProductCard from '../ProductCard/ProductCard';

import { sortProducts } from '../../utils/functions/sortProducts';

function CardSection({ products, requiredLength }) {
  const sortedProducts = sortProducts(products, requiredLength);

  return (
    <article className="card-section">
      {sortedProducts.map((product) => (
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
    </article>
  );
}

export default CardSection;
