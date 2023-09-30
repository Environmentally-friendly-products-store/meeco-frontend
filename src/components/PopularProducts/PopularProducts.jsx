import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import Carousel from '../Carousel/Carousel';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

function PopularProducts({ onCardClick }) {
  const { popular } = useContext(ProductsContext);

  return (
    <article className="popular-products">
      <Carousel
        slidesToShow={4}
        slidesToScroll={1}
        showDots={false}
        componentName="popular-products"
      >
        {popular.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price_per_unit}
            image={product.preview_image}
            name={product.name}
            brand={product.brand}
            card={product}
            id={product.id}
            /* isInShoppingCart={product.is_in_shopping_cart} */
            onCardClick={onCardClick}
          />
        ))}
      </Carousel>
    </article>
  );
}

export default PopularProducts;

/* import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import Carousel from '../Carousel/Carousel';
import encodeObjToQuery from '../../utils/functions/encodeObjToQuery';

import { useState, useEffect } from 'react';

import { getProducts } from '../../utils/productsApi';

function PopularProducts({ isUsedOnMainPage, onCardClick }) {
  const [popularProducts, setPopularProducts] = useState([]);

  const getPopularProducts = () => {
    try {
      const response = getProducts(
        encodeObjToQuery({ page: 1, limit: 12, categories: ['popular'] })
      );
      const popularProducts = response.results;
      setPopularProducts(popularProducts);
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  };

  useEffect(() => {
    getPopularProducts();
  }, []);

  return (
    <article className="popular-products">
      <Carousel slidesToShow={3} slidesToScroll={1}>
        {popularProducts.length > 0 &&
          popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              isUsedOnMainPage={isUsedOnMainPage}
              sectionWhereUsed={'popular'}
              price={product.price_per_unit}
              image={product.image_1_big}
              name={product.name}
              brand={product.brand}
              card={product}
              id={product.id}
              amount={product.amount}
              isInShoppingCart={product.is_in_shopping_cart}
              onCardClick={onCardClick}
            />
          ))}
      </Carousel>
    </article>
  );
} */
