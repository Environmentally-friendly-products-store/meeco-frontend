import './EmptyCart.css';
import ToCatalogButton from '../ToCatalogButton/ToCatalogButton';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <h2 className="empty-cart__text">
        Вы можете добавить в корзину нужные товары
      </h2>
      <h3 className="empty-cart__text empty-cart__text_small">
        Чтобы их найти, загляните в раздел с акциями или каталог
      </h3>
      <ToCatalogButton />
    </div>
  );
}

export default EmptyCart;
