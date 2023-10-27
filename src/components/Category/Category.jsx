import './Category.css';

import { useContext } from 'react';

import { ActiveItemContext } from '../../contexts/ActiveItemContext';
/* function Category({ category, onCategorysChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = (name, isChecked) => {
    setIsChecked(isChecked);
    onCategorysChange(name, isChecked);
  };

  return (
    <li
      className="category__list-item text text_weight_normal"
      key={category.id}
    >
      <label className="category__checkbox-label">
        <input
          className="category__invisible-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheckboxChange(Category.name, e.target.checked)}
        />
        <span className="category__visible-checkbox"></span>
        <span>{Category.name}</span>
      </label>
    </li>
  );
} */

function Category({ category, onCategoryButtonClick }) {
  const { activeItem, setItem } = useContext(ActiveItemContext);

  const onClick = () => {
    onCategoryButtonClick(category.slug);
    setItem(category);
  };

  return (
    <li>
      <button
        className={`category__list-button ${
          category === activeItem ? 'category__list-button_active' : ''
        }`}
        onClick={onClick}
      >
        {category.name}
      </button>
    </li>
  );
}
export default Category;
