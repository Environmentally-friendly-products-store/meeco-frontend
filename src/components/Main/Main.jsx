import Promo from '../Promo/Promo';
import CardSection from '../CardSection/CardSection';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';
import AboutProject from '../AboutProject/AboutProject';

export default function Main({ onCardClick }) {
  return (
    <>
      <Promo />
      <CardSection title="Новые поступления" isUsedOnMainPage={true}>
        <Novelties
          isUsedOnMainPage={true}
          requiredLength={4}
          onCardClick={onCardClick}
        />
      </CardSection>
      <CardSection title="Популярные товары" isUsedOnMainPage={true}>
        <PopularProducts
          isUsedOnMainPage={true}
          requiredLength={9}
          onCardClick={onCardClick}
        />
      </CardSection>
      <AboutProject />
    </>
  );
}
