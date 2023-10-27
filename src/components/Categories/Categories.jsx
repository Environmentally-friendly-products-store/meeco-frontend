import './Categories.css';

import Category from '../Category/Category';

import { useContext } from 'react';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';

function Categories({ categories, onCategoryButtonClick, onResetClick }) {
  const { activeItem, setItem } = useContext(ActiveItemContext);

  const onClick = () => {
    onResetClick();
    setItem('Все');
  };

  return (
    <div className="category category_style_general">
      <ul className="category__list">
        <li className="text text_weight_normal">
          <button
            className={`category__list-button ${
              activeItem === 'Все' ? 'category__list-button_active' : ''
            }`}
            onClick={onClick}
          >
            Все
          </button>
        </li>
        {categories.map((category) => (
          <Category
            category={category}
            key={category.id}
            onCategoryButtonClick={onCategoryButtonClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default Categories;
