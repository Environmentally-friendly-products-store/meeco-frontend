import './OrderProduct.css';
import { useState } from 'react';

function OrderProduct({ product }) {
  const loc = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`))
  );
  const counter = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)).amount
  );
  const totalItemPrice = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)).totalItemPrice
  );
  console.log(counter);
  console.log(totalItemPrice);
  console.log(loc);

  //  const totalItemPrice =  useState(product.price * counter)

  return (
    <ul className="orderproduct">
      <li className="orderproduct__product">
        <img
          className="orderproduct__image"
          src={product.image}
          alt={product.name}
        ></img>
        <p className="odredproduct__count">{counter} шт</p>
        <p className="orderproduct__name">{product.brand}</p>
        <p className="orderproduct__description">{'Детали(объем, вес)'}</p>
        {/* <p className="orderproduct__price">{product.price} ₽</p> */}
        <p className="orderproduct__totalprice">{totalItemPrice} ₽</p>
      </li>
    </ul>
  );
}

export default OrderProduct;
