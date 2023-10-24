import './PopupWithFilters.css';

function PopupWithFilters({ isPopupOpen, onClosePopup, onCloseByOverlay }) {
  return (
    <aside
      className={`popup-with-filters popup_type_filters popup ${
        isPopupOpen ? 'popup_active' : ''
      }`}
      onMouseDown={onCloseByOverlay}
    >
      <div className="popup-with-filters__filters"></div>
      {/* <div className="popup-with-filters__mask"></div> */}
    </aside>
  );
}

export default PopupWithFilters;
