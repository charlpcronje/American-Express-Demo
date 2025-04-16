// src/components/BackToTopButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

/**
 * BackToTopButton component
 * @param {Object} props - Component props
 * @param {boolean} props.showHomeButton - Whether to show the home button
 * @param {string} props.homeText - Text for the home button
 * @param {string} props.backToTopText - Text for the back to top button
 * @param {Object} props.customStyles - Custom styles for the component
 */
const BackToTopButton = ({ 
  showHomeButton = true,
  homeText = 'Home',
  backToTopText = 'Back To Top &#129129;',
  customStyles = {}
}) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isHome = location.pathname === '/';

  if (isHome) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Combine default and custom styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      ...customStyles.container
    },
    button: {
      display: 'inline-block',
      backgroundColor: theme.buttonColor,
      color: theme.buttonTextColor,
      padding: '8px 15px',
      borderRadius: '4px',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.9em',
      transition: 'background-color 0.3s',
      ...customStyles.button
    }
  };

  return (
    <div id="buttons" style={styles.container}>
      {showHomeButton && (
        <div id="back-to-intro">
          <Link to="/" style={styles.button} className="button">
            {homeText}
          </Link>
        </div>
      )}

      <div id="back-to-top">
        <button 
          onClick={scrollToTop} 
          style={styles.button} 
          className="button"
          dangerouslySetInnerHTML={{ __html: backToTopText }}
        />
      </div>
    </div>
  );
};

export default BackToTopButton;