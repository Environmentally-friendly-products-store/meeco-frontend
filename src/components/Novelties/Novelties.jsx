import './Novelties.css';
import ProductCard from '../ProductCard/ProductCard';
import { temporaryProductsArray } from '../../utils/functions/temporaryObjectArrays';
import { sortProducts } from '../../utils/functions/sortProducts';

function Novelties({ isUsedOnMainPage, requiredLength, onCardClick }) {
  const products = sortProducts(temporaryProductsArray, requiredLength);

  return (
    <article className="novelties">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          price={product.price_per_unit}
          image={product.image_1_big}
          name={product.name}
          brand={product.brand}
          card={product}
          id={product.id}
          /* isInShoppingCart={product.is_in_shopping_cart} */
          onCardClick={onCardClick}
        />
      ))}
    </article>
  );
}

export default Novelties;

/* import { useEffect, useState } from 'react';

import './Novelties.css';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../utils/productsApi';
import encodeObjToQuery from '../../utils/functions/encodeObjToQuery';


function Novelties({ isUsedOnMainPage, onCardClick }) {
  const [novelties, setNovelties] = useState([]);

  const getNewProducts = () => {
    try {
      const response = getProducts(encodeObjToQuery({ tags: 'new' }));
      const newProducts = response.results;
      setNovelties(newProducts);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getNewProducts();
  }, []);

  return (
    <article className="novelties">
      {novelties.length > 0 && novelties.map((product) => (
        <ProductCard
          key={product.id}
          isUsedOnMainPage={isUsedOnMainPage}
          sectionWhereUsed={'novelty'}
          price={product.price_per_unit}
          image={product.image_1_big}
          name={product.name}
          brand={product.brand}
          card={product}
          id={product.id}
          isInShoppingCart={product.is_in_shopping_cart}
          onCardClick={onCardClick}
          amount={product.amount}
        />
      ))}
    </article>
  );
}

export default Novelties; */
