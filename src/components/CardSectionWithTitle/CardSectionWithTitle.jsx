import './CardSectionWithTitle.css';

function CardSectionWithTitle({ children, title, additionalStyles }) {
  return (
    <section
      className={`card-section-with-title ${
        additionalStyles ? additionalStyles : ''
      }`}
    >
      <div className="card-section-with-title__header">
        <h2 className="card-section-with-title__title">{title}</h2>
      </div>

      {children}
    </section>
  );
}

export default CardSectionWithTitle;
