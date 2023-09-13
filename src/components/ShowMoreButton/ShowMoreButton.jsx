import './ShowMoreButton.css';

function ShowMoreButton({ onShowMoreButtonClick }) {
  return (
    <button
      className="show-more-button text text_weight_normal catalog__show-more-button"
      onClick={onShowMoreButtonClick}
    >
      Показать ещё
    </button>
  );
}

export default ShowMoreButton;
