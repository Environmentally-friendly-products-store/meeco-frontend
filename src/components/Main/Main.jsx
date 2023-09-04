import Promo from '../Promo/Promo';
import ProductCard from '../ProductCard/ProductCard';

export default function Main() {
  return (
    <>
      <Promo />

      <ProductCard
        /* Нужно указать, используется ли компонент на mainpage. */
        isUsedOnMainPage={true}
        /* Через пропс нужно передать имя секции в виде строки,
        в которой будет использоваться компонент. на данный момент есть novelty(новинки),
         popular и catalog. В зависимости от выбранного значения, будут применяться разные стили */
        sectionWhereUsed={'novelty'}
        price={1000}
        /* image сейчас подключен напрямую в компоненте ProductCard, это временное решение */
        /* image={image} */
        name={'Название товара'}
        brand={'Бренд'}
      />
    </>
  );
}
