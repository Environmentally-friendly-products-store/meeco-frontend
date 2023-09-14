import './CardSection.css';
import { NavLink } from 'react-router-dom';

/* function CardSection({
  children,
  isUsedOnMainPage,
  title,
  quantity,
  filters = [],
  onReset,
  onFilterDelete,
}) {
  console.log(filters.categories[0]);

  return (
    <section
      className={`card-section ${
        isUsedOnMainPage ? 'card-section_style_main' : ''
      }`}
    >
      {!isUsedOnMainPage && (
        <div className="card-section__filter-header">
          <p className="card-section__quantity text text_weight_normal">
            {quantity} товаров
          </p>

          {filters.categories.length > 0 && (
            <div className="card-section__filters-block">
              {filters.categories.map((filter, index) => (
                <button
                  className="card-section__filter card-section__filter card-section__filter_style_item"
                  key={index}
                >
                  {filter}
                </button>
              ))}
              <button
                className="card-section__filter card-section__filter_style_reset"
                onClick={onReset}
              >
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
} */

function CardSection({ children, isUsedOnMainPage, title, quantity }) {
  return (
    <section
      className={`card-section ${
        isUsedOnMainPage ? 'card-section_style_main' : 'catalog__card-section'
      }`}
    >
      {!isUsedOnMainPage && (
        <div className="card-section__filter-header">
          <p className="card-section__quantity text text_weight_normal">
            {quantity} товаров
          </p>
        </div>
      )}

      {isUsedOnMainPage && (
        <div className="card-section__header">
          <h2 className="card-section__title">{title}</h2>
          <NavLink className="card-section__link selectable-link" to="/catalog">
            Смотреть всё
          </NavLink>
        </div>
      )}

      {children}
    </section>
  );
}

export default CardSection;
