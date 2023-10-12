import './AboutProject.css';
import ButtonRight from '../ButtonRight/ButtonRight';

export default function AboutProject() {
  return (
    <article className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">Экологичное будущее —</h2>
        <h2 className="about-project__title">это каждый из нас</h2>
        <div className="about-project__container-button">
          <ButtonRight text="Подробнее" path="/about-us" />
        </div>
      </div>
    </article>
  );
}
