import './Category.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { useContext } from 'react';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';

function Category({ categoryItems, onCategoryButtonClick, onResetClick }) {
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
            className={`text text_weight_normal category__list-button ${
              activeItem === 'Все' ? 'category__list-button_active' : ''
            }`}
            onClick={onClick}
          >
            Все
          </button>
        </li>
        {categoryItems.map((categoryItem) => (
          <CategoryItem
            categoryItem={categoryItem}
            key={categoryItem.id}
            onCategoryButtonClick={onCategoryButtonClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default Category;
