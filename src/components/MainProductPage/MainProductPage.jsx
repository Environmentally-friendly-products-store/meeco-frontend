import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './MainProductPage.css';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import defineImage from '../../utils/functions/defineImage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { trackDetails } from '../../utils/yandexCounter';
import Accordion from '../Accordion/Accordion';

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
  const [mainSlider, setMainSlider] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { email } = useContext(CurrentUserContext);

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

  const onChangeCounter = (operator) => {
    if (card.amount - 1 === 0 && operator === '-') {
      onButtonDeleteClick(card);
      return;
    }
    switch (operator) {
      case '+':
        onButtonChangeClick(card, card.amount + 1, token);
        return;
      case '-':
        onButtonChangeClick(card, card.amount - 1, token);
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
      <Breadcrumbs productName={card.name} />
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
              {card.images &&
                card.images.slice(0, 3).map((image, index) => (
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
              {card.images &&
                card.images.map((image, index) => (
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
              {card.brand && card.brand.name}
            </p>
            <h2 className="product-page__name">{card.name}</h2>
            <p className="product-page__price">
              {card.price_per_unit}&#160;&#8381;
            </p>
            <div className="product-page__string">
              <div className="product-page__counter">
                <button
                  type="button"
                  className="product-page__button product-page__button_type_minus"
                  onClick={() => onChangeCounter('-')}
                  disabled={email === ''}
                ></button>
                <span className="product-page__count">
                  {card.amount === 0 ? '1' : card.amount}
                </span>
                <button
                  type="button"
                  className="product-page__button product-page__button_type_plus"
                  onClick={() => onChangeCounter('+')}
                ></button>
              </div>
              {card.is_in_shopping_cart ? (
                <Link
                  to="/shopping-cart"
                  className="product-page__link product-page__button_type_shopping-cart"
                >
                  Перейти в корзину
                </Link>
              ) : (
                <button
                  className="product-page__button product-page__button_type_shopping-cart"
                  onClick={() => onButtonAddClick(card)}
                >
                  Добавить в корзину
                </button>
              )}
              <button className="product-page__button product-page__button_type_favorite">
                {card.is_favorite ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5044 12.5773L12.0083 20L4.51221 12.5773M4.51221 12.5773C4.01777 12.0962 3.62831 11.5181 3.36835 10.8791C3.10839 10.2402 2.98357 9.5544 3.00173 8.86487C3.0199 8.17535 3.18067 7.49705 3.47391 6.8727C3.76715 6.24834 4.18652 5.69146 4.7056 5.23711C5.22468 4.78275 5.83223 4.44078 6.49 4.23272C7.14776 4.02466 7.84149 3.95502 8.5275 4.02819C9.21351 4.10135 9.87693 4.31574 10.476 4.65784C11.0751 4.99995 11.5968 5.46236 12.0083 6.01597C12.4216 5.46638 12.944 5.00801 13.5426 4.66953C14.1413 4.33106 14.8034 4.11977 15.4875 4.04889C16.1715 3.97801 16.8629 4.04907 17.5182 4.25762C18.1736 4.46616 18.7788 4.8077 19.2961 5.26087C19.8134 5.71404 20.2315 6.26907 20.5243 6.89124C20.8172 7.5134 20.9784 8.1893 20.998 8.87664C21.0175 9.56397 20.895 10.2479 20.638 10.8857C20.381 11.5236 19.9951 12.1015 19.5044 12.5833"
                      fill="#726E38"
                    />
                    <path
                      d="M19.5044 12.5773L12.0083 20L4.51221 12.5773C4.01777 12.0962 3.62831 11.5181 3.36835 10.8791C3.10839 10.2402 2.98357 9.5544 3.00173 8.86487C3.0199 8.17535 3.18067 7.49705 3.47391 6.8727C3.76715 6.24834 4.18652 5.69146 4.7056 5.23711C5.22468 4.78275 5.83223 4.44078 6.49 4.23272C7.14776 4.02466 7.84149 3.95502 8.5275 4.02819C9.21351 4.10135 9.87693 4.31574 10.476 4.65784C11.0751 4.99995 11.5968 5.46236 12.0083 6.01597C12.4216 5.46638 12.944 5.00801 13.5426 4.66953C14.1413 4.33106 14.8034 4.11977 15.4875 4.04889C16.1715 3.97801 16.8629 4.04907 17.5182 4.25762C18.1736 4.46616 18.7788 4.8077 19.2961 5.26087C19.8134 5.71404 20.2315 6.26907 20.5243 6.89124C20.8172 7.5134 20.9784 8.1893 20.998 8.87664C21.0175 9.56397 20.895 10.2479 20.638 10.8857C20.381 11.5236 19.9951 12.1015 19.5044 12.5833"
                      stroke="#726E38"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5044 12.5773L12.0083 20L4.51221 12.5773C4.01777 12.0962 3.62831 11.5181 3.36835 10.8791C3.10839 10.2402 2.98357 9.5544 3.00173 8.86487C3.0199 8.17535 3.18067 7.49705 3.47391 6.8727C3.76715 6.24834 4.18652 5.69146 4.7056 5.23711C5.22468 4.78275 5.83223 4.44078 6.49 4.23272C7.14776 4.02466 7.84149 3.95502 8.5275 4.02819C9.21351 4.10135 9.87693 4.31574 10.476 4.65784C11.0751 4.99995 11.5968 5.46236 12.0083 6.01597C12.4216 5.46638 12.944 5.00801 13.5426 4.66953C14.1413 4.33106 14.8034 4.11977 15.4875 4.04889C16.1715 3.97801 16.8629 4.04907 17.5182 4.25762C18.1736 4.46616 18.7788 4.8077 19.2961 5.26087C19.8134 5.71404 20.2315 6.26907 20.5243 6.89124C20.8172 7.5134 20.9784 8.1893 20.998 8.87664C21.0175 9.56397 20.895 10.2479 20.638 10.8857C20.381 11.5236 19.9951 12.1015 19.5044 12.5833"
                      stroke="#403F32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
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
