import './Promo.css';
import promoFirstSlide from '../../images/promo-image-1.png';
import promoSecondSlide from '../../images/promo-image-2.png';
import promoThirdSlide from '../../images/promo-image-3.png';
import Carousel from '../Carousel/Carousel';
import ButtonRight from '../ButtonRight/ButtonRight';

export default function Promo() {
  return (
    <section className="promo">
      <Carousel componentName="promo">
        <article className="promo-brands">
          <img
            className="promo-brands__photo"
            src={promoFirstSlide}
            alt="Изображение товаров новых брендов"
          />
          <div className="promo-brands__container">
            <h2 className="promo-brands__container-title">Новые бренды</h2>
            <p className="promo-brands__container-slogan">EcoMe</p>
            <p className="promo-brands__container-description">
              Экологичные, натуральные, минимум упаковки
            </p>
            <div className="promo-brands__container-button">
              <ButtonRight text="Перейти" path="/catalog" />
            </div>
          </div>
        </article>
        <article className="promo-brands">
          <img
            className="promo-brands__photo"
            src={promoSecondSlide}
            alt={`Изображение товаров новых брендов`}
          />
          <div className="promo-brands__container">
            <h2 className="promo-brands__container-title">Новые бренды</h2>
            <p className="promo-brands__container-slogan">EcoMe</p>
            <p className="promo-brands__container-description">
              Экологичные, натуральные, минимум упаковки
            </p>
            <div className="promo-brands__container-button">
              <ButtonRight text="Перейти" path="/catalog" />
            </div>
          </div>
        </article>
        <article className="promo-brands">
          <img
            className="promo-brands__photo"
            src={promoThirdSlide}
            alt={`Изображение товаров новых брендов`}
          />
          <div className="promo-brands__container">
            <h2 className="promo-brands__container-title">Новые бренды</h2>
            <p className="promo-brands__container-slogan">EcoMe</p>
            <p className="promo-brands__container-description">
              Экологичные, натуральные, минимум упаковки
            </p>
            <div className="promo-brands__container-button">
              <ButtonRight text="Перейти" path="/catalog" />
            </div>
          </div>
        </article>
      </Carousel>
    </section>
  );
}
