import Promo from '../Promo/Promo';
import CardSectionWithTitle from '../CardSectionWithTitle/CardSectionWithTitle';
import Novelties from '../Novelties/Novelties';
import PopularProducts from '../PopularProducts/PopularProducts';
import AboutProject from '../AboutProject/AboutProject';

export default function Main() {
  return (
    <>
      <Promo />
      <CardSectionWithTitle
        title="Новинки"
        additionalStyles={'card-section-with-title_style_main'}
      >
        <Novelties />
      </CardSectionWithTitle>
      <AboutProject />
      <CardSectionWithTitle
        title="Популярные товары"
        additionalStyles={'card-section-with-title_style_main'}
      >
        <PopularProducts />
      </CardSectionWithTitle>
    </>
  );
}
