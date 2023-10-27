import './PopupWithFilters.css';

import { useState, useEffect, useContext } from 'react';

import { getBrandsList } from '../../utils/productsApi';
import { FiltersContext } from '../../contexts/FiltersContext';

import Filter from '../Filter/Filter';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

function PopupWithFilters({
  isPopupOpen,
  onClosePopup,
  onCloseByOverlay,
  requestParams,
  changeRequestParams,
  chosenFiltersOnPanel,
  addFilterToPanel,
  deleteFilterFromPanel,
}) {
  const [formValues, setFormValues] = useState(requestParams);

  console.log(formValues);

  const addFormValue = (filterItem, parentkey, parentbody) => {
    let newFormValues;
    if (Array.isArray(parentbody)) {
      if (parentbody.includes(filterItem)) {
        return;
      }
      newFormValues = {
        ...formValues,
        [parentkey]: [...parentbody, filterItem],
      };
    } else {
      newFormValues = { ...formValues, [parentkey]: filterItem };
    }
    setFormValues(newFormValues);
    changeRequestParams({ ...requestParams, ...newFormValues });
  };

  const updateFormValue = (filterItem) => {
    setFormValues({ ...formValues, ...filterItem });
    changeRequestParams({ ...requestParams, ...filterItem });
  };

  const deleteFormValue = (filterItem, parentkey) => {
    const formValuesCopy = { ...formValues };
    const newFormValues = formValuesCopy[parentkey].filter(
      (item) => item !== filterItem
    );
    formValuesCopy[parentkey] = newFormValues;
    setFormValues(formValuesCopy);
    changeRequestParams({ ...requestParams, ...formValuesCopy });
  };

  const onFormValuesChange = (
    filterItem,
    parentkey,
    parentbody,
    isChecked = null
  ) => {
    let changeFormValues;

    if (isChecked === null) {
      changeFormValues = updateFormValue;
    } else if (isChecked) {
      changeFormValues = addFormValue;
    } else {
      changeFormValues = deleteFormValue;
    }

    changeFormValues(filterItem, parentkey, parentbody);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onReset = () => {
    /* Лучше будет этот объект присвоить переменной, но нужно проследить, чтобы объект всегда был в актуальном состоянии. Возможно, лучше будет использовать 'let'. В min_price и max_price должны приходить соответствующие данные из массива products. */
    setFormValues(requestParams);
  };

  const [brands, setBrands] = useState([]);

  const setBrandsList = async () => {
    try {
      const brands = await getBrandsList();
      setBrands(brands);
    } catch (err) {
      console.log(err.error.detail);
    }
  };

  useEffect(() => {
    setBrandsList();
  }, []);
  return (
    <aside
      className={`popup-with-filters popup_type_filters popup ${
        isPopupOpen ? 'popup_active' : ''
      }`}
      onMouseDown={onCloseByOverlay}
    >
      <article className="popup-with-filters__filters">
        <button
          className="popup-with-filters__close-button selectable-button"
          type="button"
          onClick={onClosePopup}
        ></button>
        <form
          className="popup-with-filters__form form-with-filters"
          onSubmit={onSubmit}
        >
          <h2 className="form-with-filters__title">Фильтры</h2>

          <div className="form-with-filters__filters filters">
            <Filter
              filterItems={brands}
              filterName={'Бренды'}
              parentbody={formValues.brand}
              parentkey={'brand'}
              onFormValuesChange={onFormValuesChange}
            />

            <FilterByPrice onFormValuesChange={onFormValuesChange} />
          </div>

          <div className="filters-form__buttons-section">
            <button
              className="filters-form__button filters-form__button_style_reset"
              type="reset"
              onClick={onReset}
            >
              Очистить все
            </button>
            <button
              className="filters-form__button filters-form__button_style_submit"
              type="submit"
              onClick={onSubmit}
            >
              Применить фильтры
            </button>
          </div>
        </form>
      </article>
    </aside>
  );
}

export default PopupWithFilters;
