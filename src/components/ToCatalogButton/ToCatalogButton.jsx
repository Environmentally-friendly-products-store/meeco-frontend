import './ToCatalogButton.css';
import { NavLink } from 'react-router-dom';

export default function ToCatalogButton() {
  return (
    <NavLink className="to-catalog__button" to="/catalog">
      Перейти в каталог
    </NavLink>
  );
}
