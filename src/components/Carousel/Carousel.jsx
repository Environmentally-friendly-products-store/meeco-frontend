import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Children } from 'react';
import Slider from 'react-slick';

export function CustomPrevArrow({ onClick, componentName }) {
  return (
    <div
      className={`carousel-arrows__custom carousel-arrows__custom_style_${componentName} carousel-arrows__custom_prev carousel-arrows__custom_prev_style_${componentName} selectable-button`}
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
          d="M23.7071 15.2929C24.0976 15.6834 24.0976 16.3166 23.7071 16.7071L17.4142 23H33.6667C34.219 23 34.6667 23.4477 34.6667 24C34.6667 24.5523 34.219 25 33.6667 25H17.4142L23.7071 31.2929C24.0976 31.6834 24.0976 32.3166 23.7071 32.7071C23.3166 33.0976 22.6834 33.0976 22.2929 32.7071L14.2929 24.7071C13.9024 24.3166 13.9024 23.6834 14.2929 23.2929L22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929Z"
          fill="#A5A38F"
        />
      </svg>
    </div>
  );
}

export function CustomNextArrow({ onClick, componentName }) {
  return (
    <div
      className={`carousel-arrows__custom carousel-arrows__custom_style_${componentName} carousel-arrows__custom_next carousel-arrows__custom_next_style_${componentName} selectable-button`}
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
}

export default function Carousel({
  showArrows = true,
  showDots = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = true,
  componentName = null,
  children,
}) {
  const settings = {
    arrows: showArrows,
    dots: showDots,
    infinite: true,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed: 5000,
    speed: 1000,
    prevArrow: <CustomPrevArrow componentName={componentName} />,
    nextArrow: <CustomNextArrow componentName={componentName} />,
  };
  return (
    <Slider {...settings}>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
}
