import './CardSection.css';
import { NavLink } from 'react-router-dom';

function CardSection({ children, title }) {
  return (
    <section className="card-section">
      <div className="card-section__header">
        <h2 className="card-section__title">{title}</h2>
        <NavLink className="card-section__link" to="/catalog">
          Смотреть всё
        </NavLink>
      </div>
      {children}
    </section>
  );
}

export default CardSection;
