import { useState } from 'react';
import chevron from '../../images/chevron.svg';
import ProfileAccordionItem from '../ProfileAccordionItem/ProfileAccordionItem';
import './ProfileAccordion.css';

export default function ProfileAccordion({ order, isLastOne }) {
  const date = new Date();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);
  return (
    <div
      className={`profile__accordion ${
        isLastOne ? 'profile__accordion_last' : ''
      }`}
      onClick={handleClick}
    >
      <div className="profile__main-info">
        <h3 className="profile__order-title">
          Заказ № {order.id} от {date.getDate()}&#160;октября{' '}
        </h3>
        <p className="profile__order-status">{order.status}</p>
        <p className="profile__order-date">04.11.2023</p>
        <p className="prodile__order-summary">{order.price_total}&#160;₽</p>
        <img
          className={`profile__image profile__image_type_chevron ${
            isClicked ? 'profile__image_type_chevron-up' : ''
          }`}
          src={chevron}
          alt={'Кнопка "подробнее о заказе"'}
        />
      </div>
      <ul
        className={`profile__details ${
          isClicked ? 'profile__details_clicked' : ''
        }`}
      >
        {order.products.map((product) => (
          <ProfileAccordionItem
            name={product.product.name}
            amount={product.amount}
            price={product.item_total}
            key={product.product.id}
            id={product.product.id}
          />
        ))}
      </ul>
    </div>
  );
}
