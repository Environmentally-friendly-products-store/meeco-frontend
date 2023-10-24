import './CategoryItem.css';

import { useContext } from 'react';

import { ActiveItemContext } from '../../contexts/ActiveItemContext';
/* function CategoryItem({ CategoryItem, onCategorysChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = (name, isChecked) => {
    setIsChecked(isChecked);
    onCategorysChange(name, isChecked);
  };

  return (
    <li
      className="category__list-item text text_weight_normal"
      key={CategoryItem.id}
    >
      <label className="category__checkbox-label">
        <input
          className="category__invisible-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheckboxChange(CategoryItem.name, e.target.checked)}
        />
        <span className="Category__visible-checkbox"></span>
        <span>{CategoryItem.name}</span>
      </label>
    </li>
  );
} */

function CategoryItem({ categoryItem, onCategoryButtonClick }) {
  const { activeItem, setItem } = useContext(ActiveItemContext);

  const onClick = () => {
    onCategoryButtonClick(categoryItem.slug);
    setItem(categoryItem);
  };

  return (
    <li className="text text_weight_normal">
      <button
        className={`text text_weight_normal category__list-button ${
          categoryItem === activeItem ? 'category__list-button_active' : ''
        }`}
        onClick={onClick}
      >
        {categoryItem.name}
      </button>
    </li>
  );
}
export default CategoryItem;
