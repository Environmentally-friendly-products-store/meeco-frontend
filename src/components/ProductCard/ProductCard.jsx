import { useState } from 'react';
/* Пока сделан импорт филлерной картинки напрямую в компоненте */
import image from '../../images/product_card_filler_image_s.jpg';
import './ProductCard.css';

function ProductCard({ isOnMainPage, price, /* image, */ name, brand }) {
  const [isLiked, setIsLiked] = useState(false);

  const onLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };

  /* Можно создать директорию utils и вынести этот код туда */
  const additionalLikeButtonStyles = isLiked
    ? 'product-card__like-button_type_liked'
    : '';

  return (
    <article className="product-card">
      <div className="product-card__card-container">
        <button
          type="button"
          className={`product-card__like-button ${additionalLikeButtonStyles}`}
          onClick={onLikeButtonClick}
        ></button>
        <img
          className="product-card__image"
          src={image}
          alt="название карточки"
        />
        {isOnMainPage && (
          <button
            type="button"
            className="product-card__add-to-cart-button product-card__add-to-cart-button_style_main"
          >
            Добавить в корзину
          </button>
        )}
      </div>

      <div className="product-card__info-container">
        <p className="product-card__product-item">{name}</p>

        {!isOnMainPage && (
          <>
            <p className="product-card__product-item">{brand}</p>
          </>
        )}

        <p className="product-card__product-item product-card__product-item_type_price">
          {`${price} ₽`}
        </p>

        {!isOnMainPage && (
          <button
            type="button"
            className="product-card__add-to-cart-button product-card__add-to-cart-button_style_catalog"
          ></button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
