import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Carousel/Carousel.jsx';
import './MainProductPage.css';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import {
  addCardToShoppingCart,
  changeAmountCardToShoppingCart,
  deleteCardToShoppingCart,
} from '../../utils/Api';

function MainProductPage({ card }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);
  const [counter, setCounter] = useState(card.amount);
  // card.is_in_shopping_cart

  const addButtonClick = () => {
    addCardToShoppingCart(card.id).then((card) => {
      setCounter(card.amount);
    });
    // card.amount = 1;
    // setCounter(card.amount);
  };

  const onChangeCounter = (operator) => {
    if (counter - 1 === 0 && operator === '-') {
      // deleteCardToShoppingCart(card.id);
      setCounter(null);
      return;
    }
    switch (operator) {
      case '+':
        return changeAmountCardToShoppingCart(card.id, counter + 1).then(
          (card) => {
            setCounter(card.amount);
          }
        );
      case '-':
        return changeAmountCardToShoppingCart(card.id, counter - 1).then(
          (card) => {
            setCounter(card.amount);
          }
        );
      default:
        return;
    }
  };

  useEffect(() => {
    setCounter(card.amount);
  }, [card]);

  const carouselSettingMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    asNavFor: navSlider,
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const carouselSettingNav = {
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    asNavFor: mainSlider,
    autoplaySpeed: 5000,
    speed: 1000,
  };

  return (
    <>
      <Breadcrumbs productName={'Твердый шампунь для волос Ecome'} />
      <section className="product-page">
        <div className="product-page__sliders">
          <Slider
            {...carouselSettingMain}
            ref={(slider) => setMainSlider(slider)}
            className="product-page__main-slider"
          >
            <div className="product-page__block">
              <img
                src={card.image_1_big}
                alt={'Фотография товара'}
                className="product-page__main-image"
              />
              {/* <button
              type="button"
              className="product-page__button product-page__button_type_favorite"
            /> */}
            </div>
            <div className="product-page__block">
              <img
                src={card.image_1_big}
                alt={'Фотография товара'}
                className="product-page__main-image"
              />
              {/* <button
              type="button"
              className="product-page__button product-page__button_type_favorite"
            /> */}
            </div>
            <div className="product-page__block">
              <img
                src={card.image_1_big}
                alt={'Фотография товара'}
                className="product-page__main-image"
              />
              {/* <button
              type="button"
              className="product-page__button product-page__button_type_favorite"
            /> */}
            </div>
          </Slider>
          <Slider
            {...carouselSettingNav}
            ref={(slider) => setNavSlider(slider)}
            className="product-page__nav-slider"
          >
            <img
              src={card.image_1_big}
              alt={'Фотография товара'}
              className="product-page__nav-image"
            />
            <img
              src={card.image_1_big}
              alt={'Фотография товара'}
              className="product-page__nav-image"
            />
            <img
              src={card.image_1_big}
              alt={'Фотография товара'}
              className="product-page__nav-image"
            />
          </Slider>
          <Link
            to="/catalog"
            className="product-page__link product-page__link_type_catalog selectable-link"
          >
            &#8592; Вернуться в каталог
          </Link>
        </div>
        <div className="product-page__info">
          <p className="product-page__brand">{card.brand}</p>
          <h2 className="product-page__name">{card.name}</h2>
          <p className="product-page__price">
            {card.price_per_unit}
            <span className="product-page__char">&#8381;</span>
          </p>
          <div className="product-page__string">
            <div
              className={`product-page__counter ${
                !counter && `product-page__counter_inactive`
              }`}
            >
              <button
                type="button"
                className="product-page__button product-page__button_type_minus selectable-button"
                onClick={() => onChangeCounter('-')}
              >
                &#45;
              </button>
              <span className="product-page__count">{counter}</span>
              <button
                type="button"
                className="product-page__button product-page__button_type_plus selectable-button"
                onClick={() => onChangeCounter('+')}
              >
                &#43;
              </button>
            </div>
            {counter ? (
              <Link
                to="/shopping-cart"
                className="product-page__link product-page__link_type_shopping-cart selectable-button"
              >
                Перейти в корзину
              </Link>
            ) : (
              <button
                className="product-page__button product-page__button_type_shopping-cart selectable-button"
                onClick={addButtonClick}
              >
                Добавить в корзину
              </button>
            )}
          </div>
          <h3 className="product-page__subtitle">Описание</h3>
          <p className="product-page__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </>
  );
}

export default MainProductPage;
