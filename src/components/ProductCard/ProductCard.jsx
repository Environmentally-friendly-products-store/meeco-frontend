import './ProductCard.css';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';

/* import {
  addProductToShoppingCart,
  changeProductQuantityInShoppingCart,
} from '../../utils/productsApi'; */

function ProductCard({
  price,
  image,
  name,
  brand,
  card,
  /* amount, */
  id,
  isInShoppingCart,
  onCardClick,
}) {
  const onAddToShoppingCart = () => {
    onAddToShoppingCartClick(id);
  };

  const { shoppingCart, onAddToShoppingCartClick } =
    useContext(ShoppingCartContext);

  return (
    <article className="product-card product-card">
      <NavLink
        className="product-card__link selectable-button"
        to="/product"
        onClick={() => onCardClick(card)}
      >
        <img
          className="product-card__image"
          src={defineImage(image)}
          alt="название карточки"
        />
      </NavLink>

      <>
        <p className="product-card__product-item product-card__product-brand">
          {brand}
        </p>
      </>

      <p className="product-card__product-item product-card__product-name">
        {name}
      </p>

      <p className="product-card__product-item product-card__product-price">
        {`${stylizePrice(price)} ₽`}
      </p>

      <button
        type="button"
        className="product-card__product-item  product-card__add-to-cart-button selectable-button"
        onClick={onAddToShoppingCart}
      >
        В корзину
      </button>
    </article>
  );
}

export default ProductCard;
