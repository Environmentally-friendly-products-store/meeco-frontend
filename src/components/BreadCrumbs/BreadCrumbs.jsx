import './BreadCrumbs.css';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ productName }) {
  const breadcrumbClass = (isActive) =>
    isActive
      ? 'breadcrumb breadcrumb-active'
      : 'breadcrumb breadcrumb-not-active';

  return (
    <nav className="breadcrumbs catalog__breadcrumbs">
      <Link to="/" className={breadcrumbClass(false)}>
        Главная
      </Link>

      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/catalog" className={breadcrumbClass(!productName)}>
        Каталог
      </Link>

      {productName && (
        <>
          <span className="breadcrumb-arrow">&gt;</span>
          <Link to="/products/{id}/" className={breadcrumbClass(true)}>
            {productName}
          </Link>
        </>
      )}
    </nav>
  );
}
