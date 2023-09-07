import './CardSection.css';
import { NavLink } from 'react-router-dom';

function CardSection({
  children,
  isUsedOnMainPage,
  title,
  quantity,
  filters = [],
}) {
  return (
    <section className="card-section">
      {!isUsedOnMainPage && (
        <div className="card-section__filter-header">
          <p className="card-section__quantity">{quantity} товара</p>

          {filters.length > 0 && (
            <div className="card-section__filters-block">
              {filters.map((filter) => (
                <button
                  className="card-section__filter card-section__filter card-section__filter_style_item"
                  key={filter.id}
                >
                  {filter.name}
                </button>
              ))}
              <button className="card-section__filter card-section__filter_style_reset">
                Очистить всё
              </button>
            </div>
          )}
        </div>
      )}

      {isUsedOnMainPage && (
        <div className="card-section__header">
          <h2 className="card-section__title">{title}</h2>
          <NavLink className="card-section__link" to="/catalog">
            Смотреть всё
          </NavLink>
        </div>
      )}

      {children}
    </section>
  );
}

export default CardSection;
