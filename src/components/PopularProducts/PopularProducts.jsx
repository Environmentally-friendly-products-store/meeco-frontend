import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import image from '../../images/product_card_filler_image_s.jpg';
import Carousel from '../Carousel/Carousel';

/* Карточки пока что добавляются вручную, ждем api */

function PopularProducts() {
  return (
    <article className="popular-products">
      <Carousel slidesToShow={3} slidesToScroll={1}>
        <ProductCard
          isUsedOnMainPage={true}
          sectionWhereUsed={'popular'}
          price={1000}
          image={image}
          name={'Название товара'}
          brand={'Бренд'}
        />
        <ProductCard
          isUsedOnMainPage={true}
          sectionWhereUsed={'popular'}
          price={1000}
          image={image}
          name={'Название товара'}
          brand={'Бренд'}
        />
        <ProductCard
          isUsedOnMainPage={true}
          sectionWhereUsed={'popular'}
          price={1000}
          image={image}
          name={'Название товара'}
          brand={'Бренд'}
        />
        <ProductCard
          isUsedOnMainPage={true}
          sectionWhereUsed={'popular'}
          price={1000}
          image={image}
          name={'Название товара'}
          brand={'Бренд'}
        />
        <ProductCard
          isUsedOnMainPage={true}
          sectionWhereUsed={'popular'}
          price={1000}
          image={image}
          name={'Название товара'}
          brand={'Бренд'}
        />
        <ProductCard
          isUsedOnMainPage={true}
          sectionWhereUsed={'popular'}
          price={1000}
          image={image}
          name={'Название товара'}
          brand={'Бренд'}
        />
      </Carousel>
    </article>
  );
}

export default PopularProducts;
