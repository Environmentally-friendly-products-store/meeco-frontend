import './OrderProduct.css';
import defineImage from '../../utils/functions/defineImage';

function OrderProduct({ product }) {
  const { name, price_per_unit, amount, preview_image } = product;
  const totalItemPrice = price_per_unit * amount;

  return (
    <ul className="orderproduct">
      <li className="orderproduct__product">
        <img
          className="orderproduct__image"
          src={defineImage(preview_image)}
          alt={name}
        />
        <p className="odredproduct__count">{amount} шт</p>
        <p className="orderproduct__name">{name}</p>
        <p className="orderproduct__totalprice">{totalItemPrice} ₽</p>
      </li>
      <br></br>
    </ul>
  );
}

export default OrderProduct;
