import './Promo.css';
import promoFirstSlide from '../../images/promo-image-1.png';
import promoSecondSlide from '../../images/promo-image-2.png';
import promoThirdSlide from '../../images/promo-image-3.png';
import Carousel from '../Carousel/Carousel';
import ButtonRight from '../ButtonRight/ButtonRight';

export default function Promo() {
  // TODO: использовать, когда акции будут приходить с сервера
  // if (promo.length > 0) {
  //   trackPromoView(promo, 'promo');
  // }

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
            <h2 className="promo-brands__container-title">Выгодные дни</h2>
            <p className="promo-brands__container-slogan">Веревочные сумки</p>
            <p className="promo-brands__container-description">
              Скидка 20% на вторую сумку из органического хлопка
            </p>
            <div className="promo-brands__container-button">
              <ButtonRight text="Перейти" path="/product/16" />
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
            <h2 className="promo-brands__container-title">Выгодные дни</h2>
            <p className="promo-brands__container-slogan">3 по цене 2</p>
            <p className="promo-brands__container-description">
              Биоразлагаемые стаканчики BPA free
            </p>
            <div className="promo-brands__container-button">
              <ButtonRight text="Перейти" path="/product/29" />
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
            <h2 className="promo-brands__container-title">Выгодные дни</h2>
            <p className="promo-brands__container-slogan">Веганское мыло</p>
            <p className="promo-brands__container-description">
              Свободно от SLS и консервантов
            </p>
            <div className="promo-brands__container-button">
              <ButtonRight text="Перейти" path="/product/11" />
            </div>
          </div>
        </article>
      </Carousel>
    </section>
  );
}
