import './Novelties.css';
import ProductCard from '../ProductCard/ProductCard';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

function Novelties() {
  const { novelties } = useContext(ProductsContext);

  return (
    <article className="novelties">
      {novelties.map((product) => (
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
    </article>
  );
}

export default Novelties;
