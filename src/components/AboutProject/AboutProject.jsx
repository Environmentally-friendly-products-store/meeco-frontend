import './AboutProject.css';
import { NavLink } from 'react-router-dom';
import eco_image from '../../images/eco us.png';

export default function AboutProject() {
  return (
    <article className="aboutProject">
      <img className="aboutProject__image" src={eco_image} alt="eco banner" />
      <div className="aboutProject__container">
        <h2 className="aboutProject__title">
          Экологичное будущее — это каждый из нас
        </h2>
        <p className="aboutProject__text">Наша миссия:....</p>
        <NavLink className="aboutProject__button selectable-button" to="#">
          &#x2192;
        </NavLink>
      </div>
    </article>
  );
}
