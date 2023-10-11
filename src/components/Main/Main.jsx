import Promo from '../Promo/Promo';
import CardSection from '../CardSection/CardSection';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';
import AboutProject from '../AboutProject/AboutProject';

export default function Main() {
  return (
    <>
      <Promo />
      <CardSection title="Новинки" isUsedOnMainPage={true}>
        <Novelties />
      </CardSection>
      <AboutProject />
      <CardSection title="Популярные товары" isUsedOnMainPage={true}>
        <PopularProducts />
      </CardSection>
    </>
  );
}
