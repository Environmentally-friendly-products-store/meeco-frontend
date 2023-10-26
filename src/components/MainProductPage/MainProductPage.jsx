import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './MainProductPage.css';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import defineImage from '../../utils/functions/defineImage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { trackDetails } from '../../utils/yandexCounter';
import Accordion from '../Accordion/Accordion';
import LikeButton from '../LikeButton/LikeButton';

const productDescription = [
  {
    title: 'Описание',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 'description',
  },
  {
    title: 'Состав',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 'composition',
  },
];

function MainProductPage({
  card,
  onButtonAddClick,
  onButtonDeleteClick,
  onButtonChangeClick,
  onCardClick,
  token,
}) {
  const [product, setProduct] = useState(card);
  const [mainSlider, setMainSlider] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { email } = useContext(CurrentUserContext);
  const { shoppingCart } = useContext(ShoppingCartContext);

  const findCardInshoppingCart = useCallback(() => {
    for (const item of shoppingCart) {
      if (item.product.id === product.id) {
        return setProduct((prev) => {
          const updatedProduct = {
            ...prev,
            is_in_shopping_cart: true,
            amount: item.amount,
          };
          return updatedProduct;
        });
      }
    }
  }, [shoppingCart, product.id]);

  useEffect(() => {
    if (location.pathname.includes('/product')) {
      onCardClick(id);
    }
  }, [email, onCardClick, id, location.pathname]);

  useEffect(() => {
    if (card) {
      if (mainSlider) {
        mainSlider.slickGoTo(0);
      }
      trackDetails(card);
    }
  }, [card, mainSlider]);

  useEffect(() => {
    if (card) {
      setProduct({});
      setProduct(card);
      findCardInshoppingCart();
    }
  }, [card, shoppingCart, location.pathname]);

  const onChangeCounter = (operator) => {
    if (product.amount - 1 === 0 && operator === '-') {
      onButtonDeleteClick(product);
      return;
    }
    switch (operator) {
      case '+':
        onButtonChangeClick(card, product.amount + 1, token);
        return;
      case '-':
        onButtonChangeClick(card, product.amount - 1, token);
        return;
      default:
        return;
    }
  };

  const carouselSettingMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1000,
    initialSlide: selectedIndex,
  };

  return (
    <>
      <Breadcrumbs productName={product.name} />
      <section className="product-page">
        <Link
          onClick={() => navigate(-1)}
          className="product-page__link product-page__link_type_catalog"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2803 6.28033C11.5732 5.98744 11.5732 5.51256 11.2803 5.21967C10.9874 4.92678 10.5126 4.92678 10.2197 5.21967L4.21967 11.2197C4.14776 11.2916 4.09351 11.3745 4.05691 11.4629C4.02024 11.5513 4 11.6483 4 11.75C4 11.8517 4.02024 11.9487 4.05691 12.0371C4.05857 12.0411 4.06026 12.0451 4.062 12.0491C4.09847 12.133 4.15102 12.2117 4.21967 12.2803L10.2197 18.2803C10.5126 18.5732 10.9874 18.5732 11.2803 18.2803C11.5732 17.9874 11.5732 17.5126 11.2803 17.2197L6.56066 12.5H18.75C19.1642 12.5 19.5 12.1642 19.5 11.75C19.5 11.3358 19.1642 11 18.75 11H6.56066L11.2803 6.28033Z"
              fill="#403F32"
            />
          </svg>
          <span className="product-page__link-text">Назад</span>
        </Link>
        <div className="product-page__main">
          <div className="product-page__sliders">
            <div className="pruduct-page__nav-images">
              {product.images &&
                product.images.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={defineImage(image.preview_image)}
                    alt={'Фотография товара'}
                    onClick={() => {
                      setSelectedIndex(index);
                      mainSlider.slickGoTo(index);
                    }}
                    className={`product-page__nav-image ${
                      selectedIndex === index &&
                      `product-page__nav-image_active`
                    }`}
                  />
                ))}
            </div>
            <Slider
              {...carouselSettingMain}
              ref={(slider) => setMainSlider(slider)}
              className="product-page__main-slider"
            >
              {product.images &&
                product.images.map((image, index) => (
                  <div className="product-page__block" key={index}>
                    <img
                      src={defineImage(image.big_image)}
                      alt={'Фотография товара'}
                      className="product-page__main-image"
                    />
                  </div>
                ))}
            </Slider>
          </div>
          <div className="product-page__info">
            <p className="product-page__brand">
              {product.brand && product.brand.name}
            </p>
            <h2 className="product-page__name">{product.name}</h2>
            <p className="product-page__price">
              {product.price_per_unit}&#160;&#8381;
            </p>
            <div className="product-page__string">
              <div className="product-page__container">
                {product.is_in_shopping_cart ? (
                  <Link
                    to="/shopping-cart"
                    className="product-page__link product-page__button_type_shopping-cart"
                  >
                    Перейти в корзину
                  </Link>
                ) : (
                  <button
                    className="product-page__button product-page__button_type_shopping-cart"
                    onClick={() => onButtonAddClick(product, 1)}
                  >
                    Добавить в корзину
                  </button>
                )}
              </div>
              <div
                className="product-page__counter"
                style={
                  product.is_in_shopping_cart
                    ? { display: 'flex' }
                    : { display: 'none' }
                }
              >
                <button
                  type="button"
                  className="product-page__button product-page__button_type_minus"
                  onClick={() => onChangeCounter('-')}
                  disabled={!product.is_in_shopping_cart}
                ></button>
                <span className="product-page__count">
                  {!product.amount ? '0' : product.amount}
                </span>
                <button
                  type="button"
                  className="product-page__button product-page__button_type_plus"
                  onClick={() => onChangeCounter('+')}
                  disabled={!product.is_in_shopping_cart}
                ></button>
              </div>
              <LikeButton id={product.id} />
            </div>
            {/* <h3 className="product-page__subtitle">Описание</h3>
            <p className="product-page__description">{card.description}</p> */}
            {productDescription.map((item, index) => (
              <Accordion
                isProductPage={true}
                title={item.title}
                text={item.text}
                id={item.id}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProductPage;
