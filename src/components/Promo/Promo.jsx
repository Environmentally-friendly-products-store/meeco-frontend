import './Promo.css';
import {NavLink} from 'react-router-dom';
import promoBrands from '../../images/promo_brands_s.jpg';
import Carousel from "../Carousel/Carousel";

export default function Promo() {
  return (
    <Carousel>
      <article className="promo-brands">
        <img className="promo-brands__photo" src={promoBrands} alt={`Изображение товаров новых брендов`}/>
        <div className="promo-brands__container">
          <h2 className="promo-brands__container-title">Новые бренды</h2>
          <p className="promo-brands__container-slogan">Бережное будущее в каждой покупке</p>
          <p className="promo-brands__container-description">Экологичные, натуральные, минимум упаковки</p>
          <NavLink className="promo-brands__container-button" to="/profile">
            Перейти к брендам →
          </NavLink>
        </div>
      </article>
      <article className="promo-brands">
        <div className="promo-brands__container">
          <h2 className="promo-brands__container-title">Новые бренды</h2>
          <p className="promo-brands__container-slogan">Бережное будущее в каждой покупке</p>
          <p className="promo-brands__container-description">Экологичные, натуральные, минимум упаковки</p>
          <NavLink className="promo-brands__container-button" to="/profile">
            Перейти к брендам →
          </NavLink>
        </div>
        <img className="promo-brands__photo" src={promoBrands} alt={`Изображение товаров новых брендов`}/>
      </article>
      <article className="promo-brands">
        <img className="promo-brands__photo" src={promoBrands} alt={`Изображение товаров новых брендов`}/>
        <div className="promo-brands__container">
          <h2 className="promo-brands__container-title">Новые бренды</h2>
          <p className="promo-brands__container-slogan">Бережное будущее в каждой покупке</p>
          <p className="promo-brands__container-description">Экологичные, натуральные, минимум упаковки</p>
          <NavLink className="promo-brands__container-button" to="/profile">
            Перейти к брендам →
          </NavLink>
        </div>
      </article>
    </Carousel>
  );
}
