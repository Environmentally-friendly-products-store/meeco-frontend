import './CardSectionWithTitle.css';

function CardSectionWithTitle({ children, title, additionalStyles, span }) {
  return (
    <section
      className={`card-section-with-title ${
        additionalStyles ? additionalStyles : ''
      }`}
    >
      {' '}
      {additionalStyles === 'card-section-with-title_style_search' ? (
        <div
          className={`card-section-with-title__header ${
            additionalStyles === 'card-section-with-title_style_search'
              ? 'card-section-with-title__header-title'
              : ''
          }`}
        >
          <h2
            className={`card-section-with-title__title ${
              additionalStyles === 'card-section-with-title_style_search'
                ? 'card-section-with-title__search-title'
                : ''
            }`}
          >
            {title}
            <span className="card-section-with-title__span">{span}</span>
          </h2>
        </div>
      ) : (
        <div className="card-section-with-title__header">
          <h2 className="card-section-with-title__title">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}

export default CardSectionWithTitle;
