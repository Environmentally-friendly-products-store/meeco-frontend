import './ButtonRight.css';
import { NavLink } from 'react-router-dom';
import arrowRight from '../../images/button_right-arrow.svg';

export default function ButtonRight({ path, text }) {
  return (
    <NavLink to={path} className="button-right">
      <p className="button-right__text">{text}</p>
      <img
        className="button-right__arrow"
        src={arrowRight}
        alt="Стрелка вправо"
      />
    </NavLink>
  );
}
