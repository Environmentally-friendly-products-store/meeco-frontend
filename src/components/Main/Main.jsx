import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import CardSection from '../CardSection/CardSection';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';

export default function Main() {
  return (
    <>
      <Promo />
      <CardSection title="Новые поступления" isUsedOnMainPage={true}>
        <Novelties isUsedOnMainPage={true} requiredLength={4} />
      </CardSection>
      <CardSection title="Популярные товары" isUsedOnMainPage={true}>
        <PopularProducts isUsedOnMainPage={true} requiredLength={9} />
      </CardSection>
      <AboutProject />
    </>
  );
}
