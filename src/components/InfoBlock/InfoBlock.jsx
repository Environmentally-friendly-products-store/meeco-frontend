import './InfoBlock.css';
import infoblock from '../../images/termsofuse-frame.png';

export default function InfoBlock({
  title,
  id,
  children,
  showImage = true,
  hasAlternativeTitleStyles,
}) {
  return (
    <div
      className={`infoblock ${
        hasAlternativeTitleStyles ? 'infoblock_style_privacy-policy' : ''
      }`}
    >
      <h2
        className={`infoblock__title ${
          hasAlternativeTitleStyles
            ? 'infoblock__title_style_privacy-policy'
            : ''
        }`}
        id={id}
      >
        {title}
      </h2>
      {showImage && (
        <img
          className="infoblock__image"
          src={infoblock}
          alt="Изображение иконок заказ, доставка, оплата"
        />
      )}
      {children}
    </div>
  );
}
