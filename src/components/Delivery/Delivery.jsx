import './Delivery.css';
import catalogIcon from '../../images/catalog-icon.svg';
import shoppingCartIcon from '../../images/shopping-cart-icon.svg';
import deliveryIcon from '../../images/delivery-icon.svg';
import boxIcon from '../../images/box-icon.svg';
import InfoPage from '../InfoPage/InfoPage';
import InfoBlock from '.././InfoBlock/InfoBlock';
import Accordion from '../Accordion/Accordion';

export default function Delivery() {
  return (
    <InfoPage title="Доставка и оплата" id="deliveryAndPayments">
      <InfoBlock
        title="Как сделать заказ"
        id="aboutOrder"
        alternativeBlockStyles="infoblock_style_delivery"
      >
        <div className="infoblock__how-to-order">
          <div className="infoblock__how-to-order-item">
            <div className="infoblock__how-to-order-image-container">
              <img src={catalogIcon} alt="#" />
            </div>
            <p className="infoblock__description">
              Выберите нужный товар и перейдите к его подробному описанию
            </p>
          </div>

          <div className="infoblock__how-to-order-item">
            <div className="infoblock__how-to-order-image-container">
              <img src={shoppingCartIcon} alt="#" />
              <span className="infoblock__how-to-order-count">1</span>
            </div>
            <p className="infoblock__description">
              Добавьте в корзину необходимое количество позиций
            </p>
          </div>

          <div className="infoblock__how-to-order-item">
            <div className="infoblock__how-to-order-image-container">
              <img src={deliveryIcon} alt="#" />
            </div>
            <p className="infoblock__description">
              Перейдите по кнопке оформления для ввода данных доставки
            </p>
          </div>

          <div className="infoblock__how-to-order-item">
            <div className="infoblock__how-to-order-image-container">
              <img src={boxIcon} alt="#" />
            </div>
            <p className="infoblock__description">
              Проверьте все данные и подтвердите ваш заказ. Готово!
            </p>
          </div>
        </div>
      </InfoBlock>

      {accordionContent.map((item, index) => (
        <Accordion
          title={item.title}
          text={item.text}
          id={item.id}
          key={index}
        />
      ))}
    </InfoPage>
  );
}

const accordionContent = [
  {
    title: 'Оплата',
    text: 'Оплата производится наличными или банковской картой при получении заказа',
    id: 'aboutPayment',
  },
  {
    title: 'Доставка',
    text: 'Доставка производится из Москвы транспортными компаниями: CDEK, Деловые Линии, Пэк и Почтой России. В зависимости от удалённости от Москвы стандартный срок составляет 2–8 дней, если вам необходима срочная доставка — оставьте, пожалуйста, комментарий к заказу при оформлении',
    id: 'aboutDeliveryAndReturns',
  },
  {
    title: 'Возврат',
    text: 'Вернуть купленные товары можно сделав заявку по телефону 8 800 900-90-90',
    id: 'aboutDeliveryAndReturns',
  },
];
