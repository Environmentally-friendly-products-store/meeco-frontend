import './ProductCard.css';
import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';
import { FavouritesContext } from '../../contexts/FavouritesContext';

function ProductCard({ price, image, name, brand, id }) {
  const { onIncreaseProductInShoppingCart } = useContext(ShoppingCartContext);
  const { onToggleFavourites, isProductInFavourites } =
    useContext(FavouritesContext);

  const onLikeButtonClick = () => {
    onToggleFavourites(id);
  };
  const additionalLikeButtonStyle = useMemo(
    () => (isProductInFavourites(id) ? 'product-card__like-button_liked' : ''),
    [isProductInFavourites, id]
  );

  const onAddToShoppingCart = () => {
    onIncreaseProductInShoppingCart(id);
  };

  return (
    <article className="product-card product-card">
      <div className="product-card__container">
        <button
          type="button"
          className={`product-card__like-button ${additionalLikeButtonStyle}`}
          onClick={onLikeButtonClick}
        ></button>
        <NavLink className="product-card__link" to={`/product/${id}`}>
          <img
            className="product-card__image"
            src={defineImage(image)}
            alt="название карточки"
          />
        </NavLink>
      </div>
      <p className="product-card__product-item product-card__product-brand">
        {brand}
      </p>
      <p className="product-card__product-item product-card__product-name">
        {name}
      </p>

      <p className="product-card__product-item product-card__product-price">
        {`${stylizePrice(price)} ₽`}
      </p>

      <button
        type="button"
        className="product-card__product-item  product-card__add-to-cart-button"
        onClick={onAddToShoppingCart}
      >
        В корзину
      </button>
    </article>
  );
}

export default ProductCard;
