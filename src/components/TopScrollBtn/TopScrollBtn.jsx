import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import './TopScrollBtn.css';

function TopScrollBtn() {
  const [isVisible, setVisible] = useState(false);

  function setVisibility() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? setVisible(true) : setVisible(false);
    });
  }

  setVisibility();

  return (
    <HashLink
      smooth
      to="#top"
      id="up-btn"
      className={`up-btn ${
        isVisible ? 'up-btn_visible' : ''
      } selectable-button`}
    ></HashLink>
  );
}

export default TopScrollBtn;
