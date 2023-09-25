import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import { CustomNextArrow, CustomPrevArrow } from '../Carousel/Carousel.jsx';
import './MainProductPage.css';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import {
  addCardToShoppingCart,
  changeQuantityOfCardInShoppingCart,
  deleteCardFormShoppingCart,
} from '../../utils/productPageApi';

function MainProductPage({ card, onButtonClick }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [counter, setCounter] = useState(card.amount);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  let isLoggedIn = true;
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

  // const CustomPrevArrow = ({ onClick }) => {
  //   return (
  //     <div
  //       className="product-page__arrow product-page__arrow_prev"
  //       onClick={onClick}
  //     >
  //       <svg
  //         width="48"
  //         height="48"
  //         viewBox="0 0 48 48"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           fill-rule="evenodd"
  //           clip-rule="evenodd"
  //           d="M23.7071 15.2929C24.0976 15.6834 24.0976 16.3166 23.7071 16.7071L17.4142 23H33.6667C34.219 23 34.6667 23.4477 34.6667 24C34.6667 24.5523 34.219 25 33.6667 25H17.4142L23.7071 31.2929C24.0976 31.6834 24.0976 32.3166 23.7071 32.7071C23.3166 33.0976 22.6834 33.0976 22.2929 32.7071L14.2929 24.7071C13.9024 24.3166 13.9024 23.6834 14.2929 23.2929L22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929Z"
  //           fill="#A5A38F"
  //         />
  //       </svg>
  //     </div>
  //   );
  // };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <div
        className="product-page__arrow product-page__arrow_next"
        onClick={onClick}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.379 15.2929C25.9885 14.9024 25.3553 14.9024 24.9648 15.2929C24.5742 15.6834 24.5742 16.3166 24.9648 16.7071L31.2577 23H15C14.4477 23 14 23.4477 14 24C14 24.5523 14.4477 25 15 25H31.2577L24.9648 31.2929C24.5742 31.6834 24.5742 32.3166 24.9648 32.7071C25.3553 33.0976 25.9885 33.0976 26.379 32.7071L34.379 24.7071C34.7695 24.3166 34.7695 23.6834 34.379 23.2929L26.379 15.2929Z"
            fill="#A5A38F"
          />
        </svg>
      </div>
    );
  };

  const carouselSettingMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1000,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setSelectedIndex(next),
  };
  // Для того чтобы выделять выбранную картинку
  const indexes = {
    0: 0,
    1: 1,
    2: 2,
  };

  return (
    <>
      <Breadcrumbs productName={'Твердый шампунь для волос Ecome'} />
      <section className="product-page">
        <Link
          to="/catalog"
          className="product-page__link product-page__link_type_catalog selectable-link"
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
          Вернуться в каталог
        </Link>
        <div className="product-page__main">
          <div className="product-page__sliders">
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
                  !counter && `product-page__counter_inactive`
                }`}
              >
                <button
                  type="button"
                  className="product-page__button product-page__button_type_minus selectable-button"
                  onClick={() => onChangeCounter('-')}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03516 10H15.7018"
                      stroke="#A5A38F"
                      stroke-width="0.9375"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span className="product-page__count">{counter}</span>
                <button
                  type="button"
                  className="product-page__button product-page__button_type_plus selectable-button"
                  onClick={() => onChangeCounter('+')}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4692 4.16797C10.4692 3.90909 10.2594 3.69922 10.0005 3.69922C9.7416 3.69922 9.53174 3.90909 9.53174 4.16797V9.53174H4.16797C3.90909 9.53174 3.69922 9.7416 3.69922 10.0005C3.69922 10.2594 3.90909 10.4692 4.16797 10.4692H9.53174V15.8346C9.53174 16.0935 9.7416 16.3034 10.0005 16.3034C10.2594 16.3034 10.4692 16.0935 10.4692 15.8346V10.4692H15.8346C16.0935 10.4692 16.3034 10.2594 16.3034 10.0005C16.3034 9.7416 16.0935 9.53174 15.8346 9.53174H10.4692V4.16797Z"
                      fill="#A5A38F"
                    />
                  </svg>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProductPage;
