import './OrderProduct.css';
import { useState } from 'react';

function OrderProduct({ product }) {
  const counter = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)).counter
  );
  const totalItemPrice = useState(
    JSON.parse(localStorage.getItem(`purchaseItem${product.id}`)).totalItemPrice
  );

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
        <p className="orderproduct__price">{product.price} ₽</p>
        <p className="orderproduct__totalprice">{totalItemPrice} ₽</p>
      </li>

      <br className="orderproduct__line"></br>
    </ul>
  );
}

export default OrderProduct;
