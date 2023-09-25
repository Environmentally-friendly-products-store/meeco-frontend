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
    ></div>
  );
}

export function CustomNextArrow({ onClick, componentName }) {
  return (
    <div
      className={`carousel-arrows__custom carousel-arrows__custom_style_${componentName} carousel-arrows__custom_next carousel-arrows__custom_next_style_${componentName} selectable-button`}
      onClick={onClick}
    ></div>
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
    /* className: 'slider variable-width', */
    /* variableWidth: true, */
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
/* <div style={{ width: 348 }}>{child}</div> */
