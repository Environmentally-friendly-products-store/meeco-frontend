import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Carousel/Carousel.jsx';
import './MainProductPage.css';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import {
  addCardToShoppingCart,
  changeQuantityOfCardInShoppingCart,
  deleteCardFormShoppingCart,
} from '../../utils/productPageApi';

function MainProductPage({ card, onButtonClick }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);
  const [counter, setCounter] = useState(card.amount);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  let isLoggedIn = true;

  console.log(isLoggedIn);

  useEffect(() => {
    setCounter(card.amount);
    checkStorage();
  }, [card]);

  // Для хранения карточки товара в localStorage
  const checkStorage = () => {
    if (card.length !== 0) {
      localStorage.setItem('cardPage', JSON.stringify(card));
    }
  };
  const addToShoppingCardClick = () => {
    if (!isLoggedIn) {
      onButtonClick();
      return;
    }
    /*
      Проверка залогинен ли пользователь

        Либо выводить информацию о том, что необходимо зарегистрироваться
        Либо кнопка будет неактивна
      }
    */
    setIsClicked(true);
    setCounter(1);
    /* Api добавление товара в корзину:
    addCardToShoppingCart(card.id)
      .then((card) => {
        setCounter(card.amount);
      })
      .catch((err)=> console.log(err))
    */
  };

  const onChangeCounter = (operator) => {
    if (counter - 1 === 0 && operator === '-') {
      /* Api удаления товара из корзины:
      deleteCardFormShoppingCart(card.id)
        .then(() => setCounter(null))
        .catch((err) => console.log(err))
      */
      setCounter(null);
      return;
    }
    switch (operator) {
      case '+':
        /* Api изменения количества товара в корзине:
        changeQuantityOfCardInShoppingCart(card.id, counter + 1)
          .then((res) => setCounter({ amount }))
          .catch((err) => console.log(err))
        */
        return setCounter(counter + 1);
      case '-':
        /* Api изменения количества товара в корзине:
          changeQuantityOfCardInShoppingCart(card.id, counter - 1)
            .then((res) => setCounter({ amount }))
            .catch((err) => console.log(err))
        */
        return setCounter(counter - 1);
      default:
        return;
    }
  };

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
    beforeChange: (current, next) => setSelectedIndex(next),
  };
  // Для того чтобы выделять выбранную картинку
  const indexes = {
    0: 0,
    1: 1,
    2: 2,
  };

  // const carouselSettingNav = {
  //   arrows: false,
  //   dots: false,
  //   slidesToShow: 3,
  //   autoplay: false,
  //   asNavFor: mainSlider,
  //   autoplaySpeed: 5000,
  //   speed: 1000,
  // };

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
          <div className="pruduct-page__nav-images">
            <img
              key={indexes['0']}
              onClick={() => {
                setSelectedIndex(indexes['0']);
                mainSlider.slickGoTo(indexes['0']);
              }}
              src={card.image_1_big}
              alt={'Фотография товара'}
              className={`product-page__nav-image ${
                selectedIndex === indexes['0'] &&
                `product-page__nav-image_active`
              }`}
            />
            <img
              key={indexes['1']}
              onClick={() => {
                mainSlider.slickGoTo(indexes['1']);
                setSelectedIndex(indexes['1']);
              }}
              src={card.image_1_big}
              alt={'Фотография товара'}
              className={`product-page__nav-image ${
                selectedIndex === indexes['1'] &&
                `product-page__nav-image_active`
              }`}
            />
            <img
              key={indexes['2']}
              onClick={() => {
                mainSlider.slickGoTo(indexes['2']);
                setSelectedIndex(indexes['2']);
              }}
              src={card.image_1_big}
              alt={'Фотография товара'}
              className={`product-page__nav-image ${
                selectedIndex === indexes['2'] &&
                `product-page__nav-image_active`
              }`}
            />
          </div>
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
            {/* Проверка card.is_in_shopping_cart*/}
            {counter ? (
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
                onClick={addToShoppingCardClick}
              >
                Добавить в корзину
              </button>
            )}
          </div>
          <h3 className="product-page__subtitle">Описание</h3>
          <p className="product-page__description">
            {/* card.description */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </>
  );
}

export default MainProductPage;
