import './Categories.css';

import Category from '../Category/Category';

function Categories({
  categories,
  onCategoryButtonClick,
  onResetClick,
  activeCategoryItems,
  setActiveCategoryItems,
  handleCategoryItemClick,
}) {
  const onClick = (category) => {
    if (category.id === 'reset') {
      onResetClick();
      setActiveCategoryItems([]);
      return;
    } else {
      onCategoryButtonClick(category.slug);
      handleCategoryItemClick(category.name);
    }
  };

  const resetItem = {
    name: 'Все',
    slug: '',
    id: 'reset',
  };

  const activeClassCondition = (category) => {
    let condition;
    if (category.id !== 'reset') {
      condition = activeCategoryItems.includes(category.name);
    } else {
      condition = activeCategoryItems.length < 1;
    }
    return condition;
  };

  const categoriesWithResetButton = [resetItem, ...categories];

  /* console.log(categoriesWithResetButton); */

  return (
    <div className="category category_style_general">
      <ul className="category__list">
        {categoriesWithResetButton.map((category) => (
          <Category
            category={category}
            onClick={onClick}
            key={category.id}
            activeClassCondition={activeClassCondition}
          />
        ))}
      </ul>
    </div>
  );
}

export default Categories;
