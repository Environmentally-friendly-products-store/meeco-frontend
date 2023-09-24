import './ProductCard.css';
/* import { useState } from 'react'; */
import { NavLink } from 'react-router-dom';

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

      <>
        <p className="product-card__product-item product-card__product-brand">
          {/* {brand} */}
          EcoMe
        </p>
      </>

      <p className="product-card__product-item product-card__product-name">
        {/* {name} */}
        Набор из 4 видов высокогорного чая в крафтовых пакетах по 150гр,
        деревянная ложка
      </p>

      <p className="product-card__product-item product-card__product-price">
        {/* {`${price} ₽`} */}
        2360 ₽
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
