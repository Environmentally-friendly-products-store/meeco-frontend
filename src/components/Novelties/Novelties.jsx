import './Novelties.css';
import ProductCard from '../ProductCard/ProductCard';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { trackPromoView } from '../../utils/yandexCounter';

function Novelties() {
  const { novelties } = useContext(ProductsContext);

  if (novelties.length > 0) {
    trackPromoView(novelties, 'novelties');
  }

  return (
    <article className="novelties">
      {novelties.map((product) => (
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

export default Novelties;
