import './Accordion.css';
import { useState } from 'react';
import chevron from '../../images/chevron.svg';

export default function Accordion({
  /* accordionContent */
  title,
  text,
  id,
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
          }`}
        >
          <div className="accordion__item" onClick={() => toggle()}>
            <h2 className="accordion__item-title" id={id}>
              {title}
            </h2>
            <img
              className={`accordion__item-chevron ${
                isExpanded ? 'accordion__item-chevron_up' : ''
              }`}
              src={chevron}
              alt={`Иконка шеврон`}
            />
          </div>
          <div
            className={`accordion__item-panel ${
              isExpanded ? 'accordion__item-panel_show' : ''
            }`}
          >
            <p className="accordion__item-content">{text}</p>
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
}
//TO DO перенести массив в product и поле text заполнить данными с сервера
