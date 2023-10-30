import './ShoppingCartItem.css';
import { NavLink } from 'react-router-dom';

import stylizePrice from '../../utils/functions/stylizePrice';
import defineImage from '../../utils/functions/defineImage';
import { useContext, useMemo } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';

function ShoppingCartItem({ data, onAmountChange, onDeleteFromShoppingCart }) {
  const { amount, total_price, product } = data;
  const { onToggleFavourites, isProductInFavourites } =
    useContext(FavouritesContext);
  const onLikeButtonClick = () => {
    onToggleFavourites(product.id);
  };
  const additionalLikeButtonStyle = useMemo(
    () =>
      isProductInFavourites(product.id)
        ? 'shopping-card__like-button_liked'
        : '',
    [isProductInFavourites, product.id]
  );

  return (
    <li className="shopping-cart__product">
      <NavLink
        className="shopping-cart__link selectable-button"
        to={`/product/${product.id}`}
      >
        <img
          className="shopping-cart__product-image"
          src={defineImage(product.preview_image)}
          alt={product.name}
        />
      </NavLink>

      <p className="shopping-cart__product-item shopping-cart__product-brand">
        {product.brand}
      </p>
      <p className="shopping-cart__product-item shopping-cart__product-name">
        {product.name}
      </p>
      <button
        type="button"
        className={`shopping-card__like-button ${additionalLikeButtonStyle}`}
        onClick={onLikeButtonClick}
      ></button>
      <button
        className="shopping-cart__delete-button"
        onClick={() => onDeleteFromShoppingCart(product.id)}
      ></button>
      <p className="shopping-cart__product-item shopping-card__product-price shopping-cart__product-item_style_unit">
        {`${stylizePrice(product.price_per_unit)} ₽ / шт`}
      </p>

      <div className="shopping-card__product-quantity-switch">
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-minus selectable-button"
          onClick={() => onAmountChange(product.id, false)}
          disabled={amount === 1}
        ></button>
        <p className="shopping-cart__product-item shopping-card__product-quantity-switch-counter">
          {amount}
        </p>
        <button
          className="shopping-card__product-quantity-switch-button
        shopping-card__product-quantity-switch-plus selectable-button"
          onClick={() => onAmountChange(product.id, true)}
        ></button>
      </div>

      <p className="shopping-cart__product-item shopping-card__product-price shopping-card__product-price_style_sum">
        {`${stylizePrice(total_price)} ₽`}
      </p>
    </li>
  );
}

export default ShoppingCartItem;
