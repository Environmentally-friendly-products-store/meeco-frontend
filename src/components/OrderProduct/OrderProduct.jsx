import productimage from '../../images/product_card_filler_image_s.jpg';
import './OrderProduct.css';

function OrderProduct() {
  return (
    <ul className="orderproduct">
      <li className="orderproduct__product">
        <img
          className="orderproduct__image"
          src={productimage}
          alt="картинка товара"
        ></img>
        <p className="orderproduct__name">Наименование</p>
        <p className="orderproduct__description">Детали (объем, вес)</p>
        <p className="orderproduct__price">1000 р</p>
      </li>

      <br className="orderproduct__line"></br>
    </ul>
  );
}

export default OrderProduct;
