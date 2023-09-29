import './ProductCard.css';
/* import { useState } from 'react'; */
import { NavLink } from 'react-router-dom';

import stylizePrice from '../../utils/functions/stylizePrice';
import { serverHost } from '../../utils/constants';

import fillerImage from '../../images/product_card_filler_image_s.jpg';

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
  /* amount,
  id,
  isInShoppingCart, */
  onCardClick,
}) {
  const defineSrc = () => {
    if (image === null) {
      return fillerImage;
    } else if (image.startsWith('http')) {
      return image;
    } else {
      return `${serverHost}${image}`;
    }
  };
  /* const [counter, setCounter] = useState(amount); */

  /* const handleButtonClick = () => {
    try {
      if (isInShoppingCart) {
        setCounter(counter + 1);
        changeProductQuantityInShoppingCart(id, counter + 1);
      } else {
        addProductToShoppingCart(id);
      }
    } catch (err) {
      console.log('Ошибка перехвачена');
    }
  }; */

  /* const [isLiked, setIsLiked] = useState(false); */

  /* const onLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };

  /* const additionalLikeButtonStyles = isLiked
    ? 'product-card__like-button_liked'
    : ''; */
  return (
    <article className="product-card product-card">
      <NavLink className="product-card__link selectable-button" to="/product">
        {/* <button
          type="button"
          className={`product-card__like-button ${additionalLikeButtonStyles}`}
          onClick={onLikeButtonClick}
          </button> */}
        <img
          className="product-card__image"
          /* src={image.startsWith('http') ? image : `${serverHost}${image}`} */
          src={defineSrc()}
          alt="название карточки"
          onClick={() => onCardClick(card)}
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
        /* onClick={handleButtonClick} */
      >
        В корзину
      </button>
    </article>
  );
}

export default ProductCard;
