import './Accordion.css';
import { useState, useEffect } from 'react';
import chevron from '../../images/chevron.svg';

export default function Accordion({
  /* accordionContent */
  title,
  text,
  id,
  activeItem = null,
}) {
  /* const [expanded, setExpanded] = useState(-1); */

  const [isExpanded, setIsExpanded] = useState(false);

  /* const toggle = (index) => {
    if (expanded === index) {s
      return setExpanded(-1);
    }
    setExpanded(index);
  }; */

  /* Функции ниже нужны для раскрытия содержимого при клике на соответствующий заголовок в NavPanel. Это используется в компоненте Delivery */

  const simpleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const appointActiveItemAndToggle = () => {
    if (!activeItem.isActive) {
      activeItem.appointActiveItemId(id);
    } else {
      activeItem.appointActiveItemId(null);
    }
    simpleToggle();
  };

  const toggle = activeItem ? appointActiveItemAndToggle : simpleToggle;

  useEffect(() => {
    if (activeItem) {
      setIsExpanded(activeItem.isActive);
    }
  }, [activeItem, activeItem?.isActive, id]);

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
} /* ) */
