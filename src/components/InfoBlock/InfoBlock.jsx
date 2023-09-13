import './InfoBlock.css';
import infoblock from '../../images/termsofuse-frame.png';

export default function InfoBlock({ title, id, children, showImage = true }) {
  return (
    <div className="infoblock">
      <h2 className="infoblock__title" id={id}>
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
