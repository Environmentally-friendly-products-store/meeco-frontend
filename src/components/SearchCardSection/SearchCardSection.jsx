import CardSectionWithTitle from '../CardSectionWithTitle/CardSectionWithTitle';
import CardSection from '../CardSection/CardSection';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import { Link } from 'react-router-dom';
import './SearchCardSection.css';

export default function SearchCardSection({ value, products }) {
  const isSearchPage = true;

  return (
    <>
      <Breadcrumbs isSearchPage={isSearchPage} />
      {products.length > 0 ? (
        <CardSectionWithTitle
          title={`Нашлось по запросу: `}
          additionalStyles={'card-section-with-title_style_search'}
          span={value}
        >
          <CardSection products={products} />
        </CardSectionWithTitle>
      ) : (
        <CardSectionWithTitle
          title={'По вашему запросу товаров не найдено'}
          additionalStyles={'card-section-with-title_style_search'}
        >
          <p className="search__text">
            Измените ваш запрос или{' '}
            <Link to="/catalog" className="search__link selectable-link">
              перейдите в каталог
            </Link>
          </p>
        </CardSectionWithTitle>
      )}
    </>
  );
}
