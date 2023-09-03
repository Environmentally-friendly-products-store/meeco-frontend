import Promo from '../Promo/Promo';
import ProductCard from '../ProductCard/ProductCard';

export default function Main() {
  return (
    <>
      <Promo />
      <ProductCard
        isOnMainPage={true}
        price={1000}
        /* image={image} */
        name={'Название товара'}
        brand={'Бренд'}
      />
    </>
  );
}
