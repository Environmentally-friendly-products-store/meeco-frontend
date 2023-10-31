import './BreadCrumbs.css';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({
  productName,
  isNotFoundPage,
  isSearchPage,
}) {
  const breadcrumbClass = (isActive) =>
    isActive
      ? 'breadcrumb breadcrumb-active'
      : 'breadcrumb breadcrumb-not-active';

  return (
    <nav className="breadcrumbs">
      <Link to="/" className={`${breadcrumbClass(false)} selectable-link`}>
        Главная
      </Link>

      <div className="breadcrumb-arrow"></div>
      {!isNotFoundPage && (
        <Link
          to={`${isSearchPage ? '/search' : '/catalog'}`}
          className={`${breadcrumbClass(!productName)} selectable-link`}
        >
          {isSearchPage ? 'Результаты поиска' : 'Каталог'}
        </Link>
      )}
      {productName && (
        <>
          <span className="breadcrumb-arrow"></span>
          <Link
            to="/products/{id}/"
            className={`${breadcrumbClass(true)} selectable-link`}
          >
            {productName}
          </Link>
        </>
      )}
    </nav>
  );
}
