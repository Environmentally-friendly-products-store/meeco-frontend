import './Accordion.css';
import { useState } from 'react';
import chevron from '../../images/chevron.svg';
import productPageChevron from '../../images/Product-page-chevron-down.svg';

export default function Accordion({
  /* accordionContent */
  title,
  text,
  id,
  isProductPage,
}) {
  /* const [expanded, setExpanded] = useState(-1); */

  const [isExpanded, setExpanded] = useState(false);

  /* const toggle = (index) => {
    if (expanded === index) {
      return setExpanded(-1);
    }
    setExpanded(index);
  }; */

  const toggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <div
          className={`accordion__items ${
            isExpanded ? 'accordion__items_active' : ''
          }
            ${
              isExpanded && isProductPage
                ? 'accordion__items_type_product-page_active'
                : ''
            }
            ${isProductPage ? 'accordion__items_type_product-page' : ''}`}
        >
          <div
            className={`accordion__item ${
              isProductPage ? 'accordion__item_type_product-page' : ''
            }`}
            onClick={() => toggle()}
          >
            <h2
              className={`accordion__item-title ${
                isProductPage ? 'accordion__item-title_type_product-page' : ''
              }`}
              id={id}
            >
              {title}
            </h2>
            <img
              className={`accordion__item-chevron ${
                isProductPage ? 'accordion__item-chevron_type_product-page' : ''
              } ${isExpanded ? 'accordion__item-chevron_up' : ''}`}
              src={isProductPage ? productPageChevron : chevron}
              alt={`Иконка шеврон`}
            />
          </div>
          <div
            className={`accordion__item-panel ${
              isExpanded ? 'accordion__item-panel_show' : ''
            }`}
          >
            <p
              className={`accordion__item-content ${
                isProductPage ? 'accordion__item-content_type_product-page' : ''
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  /* return (
    <div className="wrapper">
      <div className="accordion">
        {accordionContent.map((item, index) => (
          <div className="accordion__items" key={index}>
            <div className="accordion__item" onClick={() => toggle(index)}>
              <h2 className="accordion__item-title">{item.title}</h2>
              <img
                className={`accordion__item-chevron ${
                  expanded === index ? 'accordion__item-chevron_up' : ''
                }`}
                src={chevron}
                alt={`Иконка шеврон`}
              />
            </div>
            <div
              className={`accordion__item-panel ${
                expanded === index ? 'accordion__item-panel_show' : ''
              }`}
            >
              <p className="accordion__item-content">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ); */
} /* ) */
//TO DO перенести массив в product и поле text заполнить данными с сервера
