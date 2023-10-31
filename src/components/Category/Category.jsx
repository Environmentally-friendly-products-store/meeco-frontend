import './Category.css';

function Category({ category, onClick, activeClassCondition }) {
  return (
    <li>
      <button
        className={`category__list-button ${
          activeClassCondition(category) ? 'category__list-button_active' : ''
        }`}
        onClick={() => onClick(category)}
      >
        {category.name}
      </button>
    </li>
  );
}
export default Category;
