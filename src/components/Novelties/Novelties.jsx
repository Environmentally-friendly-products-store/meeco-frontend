import './Novelties.css';
import ProductCard from '../ProductCard/ProductCard';
import image from '../../images/product_card_filler_image_s.jpg';

/* Карточки пока что добавляются вручную, ждем api */

function Novelties() {
  return (
    <article className="novelties">
      <ProductCard
        isUsedOnMainPage={true}
        sectionWhereUsed={'novelty'}
        price={1000}
        image={image}
        name={'Название товара'}
        brand={'Бренд'}
      />
      <ProductCard
        isUsedOnMainPage={true}
        sectionWhereUsed={'novelty'}
        price={1000}
        image={image}
        name={'Название товара'}
        brand={'Бренд'}
      />
      <ProductCard
        isUsedOnMainPage={true}
        sectionWhereUsed={'novelty'}
        price={1000}
        image={image}
        name={'Название товара'}
        brand={'Бренд'}
      />
      <ProductCard
        isUsedOnMainPage={true}
        sectionWhereUsed={'novelty'}
        price={1000}
        image={image}
        name={'Название товара'}
        brand={'Бренд'}
      />
    </article>
  );
}

export default Novelties;
