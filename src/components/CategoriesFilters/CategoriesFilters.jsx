import './CategoriesFilters.css';
/* import { useState } from 'react'; */
import Categories from '../Categories/Categories';

/* function FiltersSection({ categories, onFiltersChange, onReset }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="filters-section">
      <form className="filters-form" onSubmit={onSubmit} onReset={onReset}>
        <fieldset className="filters">
          <Filter
            filterItems={categories}
            filterName={'Категории'}
            onFormValuesChange={onFormValuesChange}
            onFiltersChange={onFiltersChange}
          />
          <Filter
            filterItems={brands}
            filterName={'Бренд'}
            onFormValuesChange={onFormValuesChange}
          />
          <Filter
            filterItems={countries}
            filterName={'Страна производства'}
            onFormValuesChange={onFormValuesChange}
          />

          <div className="filter filter_style_price">
            <h2 className="filter__title text text_weight_bold">Цена</h2>
            <div className="filter-range">
              <div className="filter-range__item">
                <input
                  className="filter-range__input"
                  type="text"
                  placeholder="От 0"
                />
              </div>
              <div className="filter-range__item">
                <input
                  className="filter-range__input"
                  type="text"
                  placeholder="До 10000"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <button
          className="filters-section__reset-button text text_weight_normal"
          type="reset"
        >
          Сбросить фильтры
        </button>
      </form>
    </section>
  );
} */

function CategoriesFilters({
  categories,
  onCategoryButtonClick,
  onResetClick,
}) {
  return (
    <aside className="categories-section catalog__categories-section">
      <div className="categories-form">
        <div className="categories">
          <Categories
            categories={categories}
            onCategoryButtonClick={onCategoryButtonClick}
            onResetClick={onResetClick}
          />
        </div>
      </div>
    </aside>
  );
}

export default CategoriesFilters;
