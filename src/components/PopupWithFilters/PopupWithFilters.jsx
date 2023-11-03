import './PopupWithFilters.css';

import { useState, useEffect } from 'react';

import { getBrandsList } from '../../utils/productsApi';

import { FILTERS_TO_GET_All_PRODUCTS } from '../../utils/constants';

import Filter from '../Filter/Filter';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

function PopupWithFilters({
  isPopupOpen,
  onClosePopup,
  onCloseByOverlay,
  requestParams,
  changeRequestParams,
  temporaryRequestParams,
  setNewTemporaryRequestParams,
  chosenFiltersOnPanel,
  setNewFiltersToPanel,
  temporaryFiltersToSetToPanel,
  setNewTemporaryFiltersToSetToPanel,
  resetFilters,
  /* filteredProducts, */
  minAndMaxPrices,
  /* initialMinPrice,
  initialMaxPrice,
  getMinAndMaxPrices, */
  /* initialMinAndMaxPrice, */
}) {
  const addFormValue = (filterItem, parentkeyEn, parentkeyRu, parentbody) => {
    let newFormValues;
    if (Array.isArray(parentbody)) {
      if (parentbody.includes(filterItem.slug)) {
        return;
      }
      newFormValues = {
        ...temporaryRequestParams,
        [parentkeyEn]: [...parentbody, filterItem.slug],
      };
    } else {
      newFormValues = {
        ...temporaryRequestParams,
        [parentkeyEn]: filterItem.slug,
      };
    }
    setNewTemporaryRequestParams({
      ...temporaryRequestParams,
      ...newFormValues,
    });

    setNewTemporaryFiltersToSetToPanel([
      ...temporaryFiltersToSetToPanel,
      {
        parentkeyEn,
        parentkeyRu,
        ...filterItem,
      },
    ]);
  };

  const updateFormValue = (filterItem, parentkeyEn, parentkeyRu) => {
    setNewTemporaryRequestParams({ ...temporaryRequestParams, ...filterItem });

    let newLocalFiltersToSetToPanel;

    if (
      temporaryFiltersToSetToPanel.find(
        (filter) =>
          filter.hasOwnProperty('min_price') ||
          filter.hasOwnProperty('max_price')
      )
    ) {
      newLocalFiltersToSetToPanel = temporaryFiltersToSetToPanel.map(
        (filter) => {
          return filter.hasOwnProperty('min_price') ||
            filter.hasOwnProperty('max_price')
            ? { parentkeyRu, ...filterItem }
            : filter;
        }
      );
    } else {
      newLocalFiltersToSetToPanel = [
        ...temporaryFiltersToSetToPanel,
        { parentkeyRu, ...filterItem },
      ];
    }

    setNewTemporaryFiltersToSetToPanel(newLocalFiltersToSetToPanel);
  };

  const deleteFormValue = (filterItem, parentkeyEn) => {
    const temporaryRequestParamsCopy = { ...temporaryRequestParams };
    const newRequestParams = temporaryRequestParamsCopy[parentkeyEn].filter(
      (item) => item !== filterItem.slug
    );
    temporaryRequestParamsCopy[parentkeyEn] = newRequestParams;

    setNewTemporaryRequestParams({
      ...temporaryRequestParams,
      ...temporaryRequestParamsCopy,
    });

    setNewTemporaryFiltersToSetToPanel(
      temporaryFiltersToSetToPanel.filter(
        (filter) => filter.slug !== filterItem.slug
      )
    );
  };

  const onFormValuesChange = (
    filterItem,
    parentkeyEn,
    parentkeyRu,
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

    changeFormValues(filterItem, parentkeyEn, parentkeyRu, parentbody);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeRequestParams(temporaryRequestParams);
    setNewFiltersToPanel(temporaryFiltersToSetToPanel);
    onClosePopup();
  };

  const onReset = () => {
    resetFilters();
    onClosePopup();
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
              parentbody={temporaryRequestParams.brand}
              parentkeyEn={'brand'}
              parentkeyRu={'Бренд'}
              onFormValuesChange={onFormValuesChange}
              temporaryRequestParams={temporaryRequestParams}
            />

            <FilterByPrice
              minPrice={minAndMaxPrices[0]}
              maxPrice={minAndMaxPrices[1]}
              parentkeyRu={'Цена'}
              onFormValuesChange={onFormValuesChange}
            />
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
