import { /* useCallback, */ useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

function FilterByPrice({
  onFormValuesChange,
  minPrice,
  maxPrice,
  parentkeyRu,
}) {
  const onPriceChange = (newPriceValues) => {
    setPriceValues(newPriceValues);
    onFormValuesChange(newPriceValues, null, parentkeyRu);
  };

  const onInputPriceChange = (target) => {
    const name = target.name;
    const value = target.value;

    if (isNaN(+value)) {
      return;
    }

    setPriceValues({ ...priceValues, [name]: +value });
    onFormValuesChange({ ...priceValues, [name]: +value }, null, parentkeyRu);
  };

  const [priceValues, setPriceValues] = useState({
    min_price: minPrice,
    max_price: maxPrice,
  });

  useEffect(() => {
    if (minPrice === Infinity || maxPrice === -Infinity) {
      return;
    }
    setPriceValues({
      min_price: minPrice,
      max_price: maxPrice,
    });
  }, [minPrice, maxPrice]);

  return (
    <div className="filter filter_style_price">
      <h3 className="filter__title">Цена, руб</h3>
      <div className="filter-range">
        <div className="filter-range__item filter-range__item_style_min">
          <input
            name="min_price"
            className="filter-range__input filter-range__input_style_min filter-text"
            type="text"
            value={priceValues.min_price}
            onChange={(e) => onInputPriceChange(e.target)}
            placeholder={priceValues.min_price}
          />
        </div>
        <div className="filter-range__item filter-range__item_style_max">
          <input
            name="max_price"
            className="filter-range__input filter-range__input_style_max filter-text"
            type="text"
            value={priceValues.max_price}
            onChange={(e) => onInputPriceChange(e.target)}
            placeholder={priceValues.max_price}
          />
        </div>

        <ReactSlider
          min={minPrice === Infinity ? 0 : minPrice}
          max={maxPrice === -Infinity ? 10000 : maxPrice}
          value={[priceValues.min_price, priceValues.max_price]}
          onChange={(values) =>
            onPriceChange({ min_price: values[0], max_price: values[1] })
          }
          className={'price-slider'}
          pearling
          minDistance={4}
        />
      </div>
    </div>
  );
}

export default FilterByPrice;
