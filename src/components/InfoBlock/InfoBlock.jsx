import './InfoBlock.css';

export default function InfoBlock({
  title,
  id,
  children,
  alternativeBlockStyles = '',
  alternativeTitleStyles = '',
}) {
  return (
    <div
      className={`infoblock
      ${alternativeBlockStyles}`}
    >
      <h2
        className={`infoblock__title
          ${alternativeTitleStyles}
        `}
        id={id}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
