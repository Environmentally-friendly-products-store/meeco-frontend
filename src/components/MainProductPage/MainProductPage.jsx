import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import './MainProductPage.css';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import { serverHost } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MainProductPage({
  card,
  onButtonAddClick,
  onButtonDeleteClick,
  onButtonChangeClick,
  onCardClick,
}) {
  const [mainSlider, setMainSlider] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const { id } = useParams();
  const { email } = useContext(CurrentUserContext);
  useEffect(() => {
    if (location.pathname.includes('/product')) {
      onCardClick(id);
    }
  }, [location.pathname, email]);

  const onChangeCounter = (operator) => {
    if (card.amount - 1 === 0 && operator === '-') {
      onButtonDeleteClick(card);
      setIsClicked(true);
      return;
    }
    switch (operator) {
      case '+':
        onButtonChangeClick(card, card.amount + 1);
        return;
      case '-':
        onButtonChangeClick(card, card.amount - 1);
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
  };

  return (
    <>
      <Breadcrumbs productName={card.name} />
      <section className="product-page">
        <Link
          to="/catalog"
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2803 6.28033C11.5732 5.98744 11.5732 5.51256 11.2803 5.21967C10.9874 4.92678 10.5126 4.92678 10.2197 5.21967L4.21967 11.2197C4.14776 11.2916 4.09351 11.3745 4.05691 11.4629C4.02024 11.5513 4 11.6483 4 11.75C4 11.8517 4.02024 11.9487 4.05691 12.0371C4.05857 12.0411 4.06026 12.0451 4.062 12.0491C4.09847 12.133 4.15102 12.2117 4.21967 12.2803L10.2197 18.2803C10.5126 18.5732 10.9874 18.5732 11.2803 18.2803C11.5732 17.9874 11.5732 17.5126 11.2803 17.2197L6.56066 12.5H18.75C19.1642 12.5 19.5 12.1642 19.5 11.75C19.5 11.3358 19.1642 11 18.75 11H6.56066L11.2803 6.28033Z"
              fill="#403F32"
            />
          </svg>
          <span className="product-page__link-text">Вернуться в каталог</span>
        </Link>
        <div className="product-page__main">
          <div className="product-page__sliders">
            <div className="pruduct-page__nav-images">
              {card.images &&
                card.images.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={`${serverHost}${image.preview_image}`}
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
              {card.images &&
                card.images.map((image, index) => (
                  <div className="product-page__block" key={index}>
                    <img
                      src={`${serverHost}${image.big_image}`}
                      alt={'Фотография товара'}
                      className="product-page__main-image"
                    />
                    {/* <button
              type="button"
              className="product-page__button product-page__button_type_favorite"
            /> */}
                  </div>
                ))}
            </Slider>
          </div>
          <div className="product-page__info">
            <p className="product-page__brand">{card.brand}</p>
            <h2 className="product-page__name">{card.name}</h2>
            <p className="product-page__price">
              {card.price_per_unit}&#160;&#8381;
            </p>
            <div className="product-page__string">
              <div
                className={`product-page__counter ${
                  (card.amount === 0 || !card.amount) &&
                  `product-page__counter_inactive`
                }`}
              >
                <button
                  type="button"
                  className="product-page__button product-page__button_type_minus"
                  onClick={() => onChangeCounter('-')}
                ></button>
                <span className="product-page__count">{card.amount}</span>
                <button
                  type="button"
                  className="product-page__button product-page__button_type_plus"
                  onClick={() => onChangeCounter('+')}
                ></button>
              </div>
              {card.is_in_shopping_cart ? (
                <Link
                  to="/shopping-cart"
                  className={`product-page__link product-page__link_type_shopping-cart`}
                >
                  Перейти в корзину
                </Link>
              ) : (
                <button
                  className={`product-page__button product-page__button_type_shopping-cart selectable-button ${
                    isClicked && `product-page__button_clicked`
                  }`}
                  onClick={() => onButtonAddClick(card)}
                >
                  Добавить в корзину
                </button>
              )}
            </div>
            <h3 className="product-page__subtitle">Описание</h3>
            <p className="product-page__description">{card.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProductPage;
