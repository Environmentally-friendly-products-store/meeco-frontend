import './Favorites.css';
import { ActiveItemContext } from '../../contexts/ActiveItemContext';
import CardSection from '../CardSection/CardSection';
import { useContext, useState } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';
import CardSectionWithTitle from '../CardSectionWithTitle/CardSectionWithTitle';

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
          <CardSection
            products={favourites}
            requiredLength={99999}
            onCardClick={onCardClick}
          />
        </CardSectionWithTitle>
      </ActiveItemContext.Provider>
    </section>
  );
}
