import './OrderProduct.css';

function OrderProduct({ product }) {
  return (
    <ul className="orderproduct">
      <li className="orderproduct__product">
        <img
          className="orderproduct__image"
          src={product.image}
          alt={product.name}
        ></img>
        <p className="orderproduct__name">{product.brand}</p>
        <p className="orderproduct__description">{'Детали(объем, вес)'}</p>
        <p className="orderproduct__price">{product.price} ₽</p>
      </li>

      <br className="orderproduct__line"></br>
    </ul>
  );
}

export default OrderProduct;
