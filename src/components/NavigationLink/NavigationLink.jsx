import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLink.css';

function NavigationLink({ path, text, image, count }) {
  return (
    <Link to={path} className="navigation-link selectable-button">
      <img className="navigation-link__image" src={image} alt={text}></img>
      <span className="navigation-link__text">{text}</span>
      {count && <span className="navigation-link__count_active ">{count}</span>}
    </Link>
  );
}

export default NavigationLink;
