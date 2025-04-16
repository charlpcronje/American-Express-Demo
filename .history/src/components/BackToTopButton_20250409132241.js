// src/components/BackToTopButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackToTopButton = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="buttons" className="text-right">
      <div id="back-to-intro">
        <Link to="/" className="button">Home</Link>
      </div>

      <div id="back-to-top">
        <button onClick={scrollToTop} className="button">Back To Top &#129129;</button>
      </div>
    </div>
  );
};

export default BackToTopButton;
