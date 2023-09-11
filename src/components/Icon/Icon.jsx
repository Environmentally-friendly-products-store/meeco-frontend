import './Icon.css';
import { Link } from 'react-router-dom';

export default function Icon({ image = '', alt = '', link = '' }) {
  const icon = (
    <div className="icon">
      <img className="icon__image" src={image} alt={alt}></img>
    </div>
  );
  if (!link) {
    return icon;
  }

  return (
    <Link to={link} className="selectable-link">
      {icon}
    </Link>
  );
}
