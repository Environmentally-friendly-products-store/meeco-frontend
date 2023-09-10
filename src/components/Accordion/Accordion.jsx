import './Accordion.css';
import { useState } from 'react';
import chevron from '../../images/accordion-chevron.svg';

export default function Accordion() {
  const [expanded, setExpanded] = useState(-1);
  const toggle = (index) => {
    if (expanded === index) {
      return setExpanded(-1);
    }
    setExpanded(index);
  };

  return (
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
  );
}
//TO DO перенести массив в product и поле text заполнить данными с сервера
const accordionContent = [
  {
    title: 'Описание',
    text: 'Многоразовые восковые салфетки - удобная и экологичная альтернатива пищевой плёнке. Набор состоит из трех салфеток разных размеров - 16х16 см, 24х24 см 30х30 см - в фирменном крафтовом конверте, сертифицированном FCS, и двух комплектов наклеек, с надписями и без. С помощью наклеек организация пространства холодильника становится ещё проще. Каждый продукт подписан и лежит на своём месте.',
  },
  {
    title: 'Ингридиенты',
    text: 'Восковая салфетка представляет собой ткань из 100% хлопка, пропитанную пчелиный воском, древесной смолой и маслом жожоба',
  },
  {
    title: 'Как использовать',
    text: 'Такими салфетками можно накрыть тарелку с недоеденным блюдом, обернуть отрезанные овощи или фрукты - половинку лимона или помидора, упаковать еду с собой, сложить из салфетки конвертик для орехов или ягод, а также завернуть в салфетку зелень, чтобы она дольше оставалась свежей. После использования салфетку достаточно промыть прохладной водой, при необходимости с использованием мягкого моющего средства для посуды. Берегите салфетки от источников тепла и температуры выше 50˚',
  },
  {
    title: 'Дополнительная информация',
    text: 'Восковые салфетки прослужат вам около года, а затем их можно компостировать или же просто закопать - восковые салфетки 100% биоразлаемы, так как состоят только из натуральных материалов. Для утилизации салфетки компостируйте ее, закопайте в землю или сожгите.',
  },
];
