import './Favorites.css';
import CardSection from '../CardSection/CardSection';
import { useContext } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';
import CardSectionWithTitle from '../CardSectionWithTitle/CardSectionWithTitle';
import { NavLink } from 'react-router-dom';

export default function Favourites() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <section className="favourites-section">
      <CardSectionWithTitle title="Избранное">
        {favourites.length === 0 ? (
          <div className="favourites-empty__container">
            <p className="favourites-empty__text">
              Добавьте понравившиеся вам товары, чтобы вернуться к ним позже.
              Просто нажмите сердечко на карточке товара.
            </p>
            <NavLink to="/catalog" className="favourites-empty__button">
              Перейти в каталог
            </NavLink>
          </div>
        ) : (
          <CardSection products={favourites} requiredLength={99999} />
        )}
      </CardSectionWithTitle>
    </section>
  );
}
