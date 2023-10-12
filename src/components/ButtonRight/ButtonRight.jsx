import './ButtonRight.css';
import { NavLink } from 'react-router-dom';

export default function ButtonRight({ path, text }) {
  return (
    <NavLink to={path} className="button-right">
      <p className="button-right__text">{text}</p>
      <div className="button-right__arrow" />
    </NavLink>
  );
}
