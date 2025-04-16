// src/components/Header.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Header component with logo
 * @param {Object} props - Component props
 * @param {string} props.logoSrc - Path to logo image
 * @param {string} props.logoAlt - Alt text for logo
 * @param {number} props.logoWidth - Logo width
 * @param {number} props.logoHeight - Logo height
 * @param {Object} props.customStyles - Custom styles object
 */
const Header = ({ 
  logoSrc = '/images/header.png', 
  logoAlt = 'American Express',
  logoWidth = 304,
  logoHeight = 38,
  customStyles = {}
}) => {
  const { theme } = useTheme();

  // Combine default and custom styles
  const styles = {
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      ...customStyles.header
    },
    logo: {
      maxWidth: '100%',
      height: 'auto',
      ...customStyles.logo
    }
  };

  return (
    <div className="header" style={styles.header}>
      <img 
        src={logoSrc} 
        alt={logoAlt} 
        width={logoWidth} 
        height={logoHeight} 
        style={styles.logo}
      />
    </div>
  );
};

export default Header;