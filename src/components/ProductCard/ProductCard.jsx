/* import { useState } from 'react'; */
import './ProductCard.css';
import { NavLink } from 'react-router-dom';

import /* addProductToShoppingCart,
  deleteProductFromShoppingCart, */
'../../utils/productsApi';

function ProductCard({
  isUsedOnMainPage,
  sectionWhereUsed,
  price,
  image,
  name,
  brand,
  card,
  id,
  isInShoppingCart,
  onCardClick,
}) {
  /*   const onAddToShoppingCartClick = () => {
    try {
      addProductToShoppingCart(id);
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  };

  const onDeleteFromShoppingCartClick = () => {
    try {
      deleteProductFromShoppingCart(id);
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  }; */

  /* const [isLiked, setIsLiked] = useState(false); */

  /* const onLikeButtonClick = () => {
    setIsLiked(!isLiked);
  }; */

  /* const additionalLikeButtonStyles = isLiked
    ? 'product-card__like-button_liked'
    : ''; */
  return (
    <article className={`product-card product-card_style_${sectionWhereUsed}`}>
      <div
        className={`product-card__card-container
        product-card__card-container_style_${sectionWhereUsed}`}
      >
        <NavLink
          className="product-card__link selectable-button"
          to="/product"
          onClick={() => onCardClick(card)}
        >
          {/* <button
          type="button"
          className={`product-card__like-button ${additionalLikeButtonStyles}`}
          onClick={onLikeButtonClick}
          </button> */}
          <img
            className="product-card__image"
            src={image}
            alt="название карточки"
          />
        </NavLink>
        {isUsedOnMainPage && (
          <button
            type="button"
            className="product-card__add-to-cart-button product-card__add-to-cart-button_style_main"
            /* onClick={
              isInShoppingCart
                ? onDeleteFromShoppingCartClick
                : onAddToShoppingCartClick
            } */
          >
            Добавить в корзину
          </button>
        )}
      </div>

      <div
        className={`product-card__info-container
        product-card__info-container_style_${sectionWhereUsed}`}
      >
        <p
          className={`product-card__product-item product-card__product-name
          product-card__product-name_style${sectionWhereUsed}
            `}
        >
          {name}
        </p>

        {!isUsedOnMainPage && (
          <>
            <p className="product-card__product-item">{brand}</p>
          </>
        )}

        <p
          className={`product-card__product-item product-card__product-price
          product-card__product-price_style_${sectionWhereUsed}`}
        >
          {`${price} ₽`}
        </p>

        {!isUsedOnMainPage && (
          <button
            type="button"
            className="product-card__add-to-cart-button
            product-card__add-to-cart-button_style_catalog selectable-button"
            /* onClick={
              isInShoppingCart
                ? onDeleteFromShoppingCartClick
                : onAddToShoppingCartClick
            } */
          ></button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
