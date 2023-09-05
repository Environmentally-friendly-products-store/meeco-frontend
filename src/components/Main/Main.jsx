import Promo from '../Promo/Promo';

import AboutProject from '../AboutProject/AboutProject';
import CardSection from '../CardSection/CardSection';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';

export default function Main() {
  return (
    <>
      <Promo />

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
