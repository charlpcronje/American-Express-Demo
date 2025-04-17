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
  logoSrc, 
  logoAlt = 'American Express',
  logoWidth = 304,
  logoHeight = 38,
  customStyles = {}
}) => {
  const { theme, toggleTheme } = useTheme();

  // Combine default and custom styles
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'center',
      marginBottom: '20px',
      padding: '0 1rem',
      ...customStyles.header
    },
    logo: {
      maxWidth: '100%',
      height: 'auto',
      ...customStyles.logo
    },
    toggle: {
      cursor: 'pointer',
      padding: '8px 12px',
      borderRadius: '4px',
      background: theme.cardBackground,
      color: theme.textColor,
      border: `1px solid ${theme.borderColor}`,
      fontSize: '1em',
      marginLeft: 'auto',
      transition: 'background 0.2s, color 0.2s',
    }
  };

  // Use header_white.png in dark mode, header.png in light mode
  const logoToUse = logoSrc || (theme.mode === 'dark' ? '/images/header_white.png' : '/images/header.png');

  return (
    <div className="header" style={styles.header}>
      <img 
        src={logoToUse} 
        alt={logoAlt} 
        width={logoWidth} 
        height={logoHeight} 
        style={styles.logo}
      />
      <button
        style={styles.toggle}
        onClick={toggleTheme}
        aria-label={theme.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={theme.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme.mode === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default Header;