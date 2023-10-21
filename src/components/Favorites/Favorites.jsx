import './Favorites.css';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';
import CardSection from '../CardSection/CardSection';
import { useContext, useState } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';
import CardSectionWithTitle from '../CardSectionWithTitle/CardSectionWithTitle';
import { NavLink } from 'react-router-dom';

export default function Favourites({ onCardClick }) {
  const { favourites } = useContext(FavouritesContext);

  const [activeItem, setActiveItem] = useState('');
  const setItem = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="favourites-section">
      <ActiveItemContext.Provider value={{ activeItem, setItem }}>
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
            <CardSection
              products={favourites}
              requiredLength={99999}
              onCardClick={onCardClick}
            />
          )}
        </CardSectionWithTitle>
      </ActiveItemContext.Provider>
    </section>
  );
}
