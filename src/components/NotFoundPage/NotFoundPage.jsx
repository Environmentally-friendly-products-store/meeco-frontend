import { Link } from 'react-router-dom';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const isNotFoundPage = true;
  return (
    <>
      <Breadcrumbs isNotFoundPage={isNotFoundPage} />
      <section className="not-found">
        <h2 className="not-found__title">Ошибка 404</h2>
        <p className="not-found__text">Сожалеем, но ничего не нашлось</p>
        <Link to="/" className="not-found__link">
          Перейти на главную страницу
        </Link>
      </section>
    </>
  );
}
