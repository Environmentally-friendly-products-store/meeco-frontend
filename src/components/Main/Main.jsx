import Promo from '../Promo/Promo';

import ProductCard from '../ProductCard/ProductCard';
import AboutProject from '../AboutProject/AboutProject';
import CardSection from '../CardSection/CardSection';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';

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
          
      <CardSection title="Новые поступления">
        <Novelties />
      </CardSection>
      <CardSection title="Популярные товары">
        <PopularProducts />
      </CardSection>

      <AboutProject />
    </>
  );
}
