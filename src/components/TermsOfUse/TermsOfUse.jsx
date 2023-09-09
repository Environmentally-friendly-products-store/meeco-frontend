import './TermsOfUse.css';
import termsOfUseFrame from '../../images/termsofuse-frame.png';

export default function TermsOfUse({ title, id, children }) {
  return (
    <div className="termsofuse">
      <h2 className="termsofuse__title" id={id}>
        {title}
      </h2>
      <img
        className="termsofuse__image"
        src={termsOfUseFrame}
        alt="Изображение иконок заказ, доставка, оплата"
      />
      {children}
    </div>
  );
}
