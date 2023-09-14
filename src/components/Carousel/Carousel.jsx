import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Children } from 'react';
import Slider from 'react-slick';

export function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="carousel-arrows__custom carousel-arrows__custom_prev selectable-button"
      onClick={onClick}
    >
      &#129128;
    </div>
  );
}

export function CustomNextArrow({ onClick }) {
  return (
    <div
      className="carousel-arrows__custom carousel-arrows__custom_next selectable-button"
      onClick={onClick}
    >
      &#129130;
    </div>
  );
}

export default function Carousel({
  showArrows = true,
  showDots = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = true,
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <Slider {...settings}>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
}
