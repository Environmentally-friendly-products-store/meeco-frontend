import './ProductCard.css';
import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';
import { FavouritesContext } from '../../contexts/FavouritesContext';

function ProductCard({ id, price, image, name, brand }) {
  const {
    onIncreaseProductInShoppingCart,
    onDecreaseProductInShoppingCart,
    findProductInShoppingCart,
  } = useContext(ShoppingCartContext);
  const { onToggleFavourites, isProductInFavourites } =
    useContext(FavouritesContext);

  const amountInCart = useMemo(
    () => findProductInShoppingCart(id)?.amount,
    [findProductInShoppingCart, id]
  );
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

  const onAmountChange = (productId, isIncrease) => {
    if (isIncrease) {
      onIncreaseProductInShoppingCart(productId);
    } else {
      onDecreaseProductInShoppingCart(productId);
    }
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
      {amountInCart ? (
        <div className="product-card__switch">
          <button
            className="product-card__switch-button
       product-card__switch-button_minus"
            onClick={() => onAmountChange(id, false)}
          ></button>
          <p className="shopping-cart__product-item shopping-card__product-quantity-switch-counter">
            {amountInCart}
          </p>
          <button
            className="product-card__switch-button
       product-card__switch-button_plus"
            onClick={() => onAmountChange(id, true)}
          ></button>
        </div>
      ) : (
        <button
          type="button"
          className="product-card__product-item  product-card__add-to-cart-button"
          onClick={onAddToShoppingCart}
        >
          В корзину
        </button>
      )}
    </article>
  );
}

export default ProductCard;
