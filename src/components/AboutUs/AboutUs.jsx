import './AboutUs.css';
import InfoPage from '../InfoPage/InfoPage';
import bayerImage from '../../images/about-us.png';

export default function AboutUs() {
  return (
    <InfoPage title="О нас" id="aboutUs">
      <article className="aboutus-container">
        <div className="aboutus__image-container">
          <img
            className="aboutus__image"
            src={bayerImage}
            alt="Изображение счастливого покупателя"
          ></img>
        </div>
        <div className="aboutus__description-container">
          <p className="aboutus__description-text">
            Одним из важных аспектов интернет-магазинов эко товаров является их
            вклад в снижение негативного влияния на окружающую среду. Приобретая
            товары из таких магазинов, вы поддерживаете компании, стремящиеся к
            экологической устойчивости, и содействуете изменению потребительских
            привычек в сторону более ответственного отношения к планете. Это
            важный шаг к сохранению природных ресурсов и созданию здоровой и
            устойчивой для жизни среды.
          </p>
          <p className="aboutus__description-text">
            В целом, интернет-магазины эко товаров предлагают возможность
            сделать осознанный выбор в пользу экологически чистой продукции,
            поддерживают развитие устойчивого потребительства и играют важную
            роль в сохранении природы для будущих поколений.
          </p>
        </div>
      </article>
    </InfoPage>
  );
}
