import './LikeButton.css';
import { useContext, useMemo } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';

export default function LikeButton({ id }) {
  const { onToggleFavourites, isProductInFavourites } =
    useContext(FavouritesContext);
  const onLikeButtonClick = () => {
    onToggleFavourites(id);
  };

  const additionalLikeButtonStyle = useMemo(
    () => (isProductInFavourites(id) ? 'like-button_active' : ''),
    [isProductInFavourites, id]
  );

  return (
    <button
      type="button"
      className={`like-button ${additionalLikeButtonStyle}`}
      onClick={onLikeButtonClick}
    />
  );
}
