import './ShowMoreButton.css';

function ShowMoreButton({ onShowMoreButtonClick }) {
  return (
    <button
      className="show-more-button text text_weight_normal"
      onClick={onShowMoreButtonClick}
    >
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
