import Promo from '../Promo/Promo';
import CardSection from '../CardSection/CardSection';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';
import AboutProject from '../AboutProject/AboutProject';

export default function Main({ onCardClick }) {
  return (
    <>
      <Promo />
      <CardSection title="Новинки" isUsedOnMainPage={true}>
        <Novelties requiredLength={4} onCardClick={onCardClick} />
      </CardSection>
      <AboutProject />
      <CardSection title="Популярные товары" isUsedOnMainPage={true}>
        <PopularProducts requiredLength={5} onCardClick={onCardClick} />
      </CardSection>
    </>
  );
}
