import './OrderProduct.css';
import defineImage from '../../utils/functions/defineImage';

function OrderProduct({ data }) {
  const { amount, total_price, product } = data;

  return (
    <ul className="orderproduct">
      <li className="orderproduct__product">
        <img
          className="orderproduct__image"
          src={defineImage(product.preview_image)}
          alt={product.name}
        />
        <p className="odredproduct__count">{amount} шт</p>
        <p className="orderproduct__name">{product.name}</p>
        <p className="orderproduct__totalprice">{total_price} ₽</p>
      </li>
      <br></br>
    </ul>
  );
}

export default OrderProduct;
