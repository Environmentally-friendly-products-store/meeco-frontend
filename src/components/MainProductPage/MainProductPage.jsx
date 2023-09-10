import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Accordion from '../Accordion/Accordion.jsx';
import { CustomPrevArrow, CustomNextArrow } from '../Carousel/Carousel.jsx';
import ProductCardPath from '../../images/product_card_filler_image_s.jpg';
import './MainProductPage.css';

function MainProductPage() {
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);

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
    <section className="product-page">
      <div className="product-page__sliders">
        <Slider
          {...carouselSettingMain}
          ref={(slider) => setMainSlider(slider)}
          className="product-page__main-slider"
        >
          <div className="product-page__block">
            <img
              src={ProductCardPath}
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
              src={ProductCardPath}
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
              src={ProductCardPath}
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
              src={ProductCardPath}
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
              src={ProductCardPath}
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
              src={ProductCardPath}
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
            src={ProductCardPath}
            alt={'Фотография товара'}
            className="product-page__nav-image"
          />
          <img
            src={ProductCardPath}
            alt={'Фотография товара'}
            className="product-page__nav-image"
          />
          <img
            src={ProductCardPath}
            alt={'Фотография товара'}
            className="product-page__nav-image"
          />
          <img
            src={ProductCardPath}
            alt={'Фотография товара'}
            className="product-page__nav-image"
          />
          <img
            src={ProductCardPath}
            alt={'Фотография товара'}
            className="product-page__nav-image"
          />
          <img
            src={ProductCardPath}
            alt={'Фотография товара'}
            className="product-page__nav-image"
          />
        </Slider>
        <Link
          to="/"
          className="product-page__link product-page__link_type_catalog"
        >
          &#8592; Вернуться в каталог
        </Link>
      </div>
      <div className="product-page__info">
        <p className="product-page__brand">Бренд</p>
        <h2 className="product-page__name">Наименование</h2>
        <p className="product-page__price">
          1 000 <span className="product-page__char">&#8381;</span>
        </p>
        <div className="product-page__string">
          <div className="product-page__counter">
            <button
              type="button"
              className="product-page__button product-page__button_type_minus"
            >
              &#45;
            </button>
            <span className="product-page__count">1</span>
            <button
              type="button"
              className="product-page__button product-page__button_type_plus"
            >
              &#43;
            </button>
          </div>
          <Link
            to="/"
            className="product-page__link product-page__link_type_shopping-cart"
          >
            Перейти в корзину
          </Link>
        </div>
        <h3 className="product-page__subtitle">Описание</h3>
        <p className="product-page__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* <Accordion /> */}
      </div>
    </section>
  );
}

export default MainProductPage;
