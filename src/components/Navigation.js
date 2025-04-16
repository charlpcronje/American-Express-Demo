// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';

/**
 * Navigation component
 * @param {Object} props - Component props
 * @param {boolean} props.isVisible - Whether the navigation is visible
 * @param {Object} props.customStyles - Custom styles object
 * @param {Object} props.links - Custom navigation links (override defaults)
 */
const Navigation = ({ 
  isVisible = false, 
  customStyles = {},
  links = null
}) => {
  const { data } = useData();
  const { theme } = useTheme();
  
  // Get product name from data
  const productName = data?.PRODUCT || '';
  
  // Default links if none provided
  const defaultLinks = [
    { to: '/monthly-spend-analysis', text: 'Monthly Spend Analysis' },
    { to: '/monthly-supplier-category-analysis', text: 'Monthly supplier category analysis' },
    { to: '/monthly-supplier-analysis', text: 'Monthly supplier analysis' }
  ];
  
  // Use provided links or defaults
  const navigationLinks = links || defaultLinks;

  // Combine default and custom styles
  const styles = {
    navigation: {
      display: isVisible ? 'block' : 'none',
      width: '200px',
      backgroundColor: theme.primaryColor,
      color: 'white',
      padding: '20px',
      position: 'fixed',
      height: '100%',
      left: 0,
      top: 0,
      overflowY: 'auto',
      zIndex: 100,
      ...customStyles.navigation
    },
    paragraph: {
      marginBottom: '15px',
      ...customStyles.paragraph
    },
    logo: {
      display: 'block',
      margin: '0 auto 20px',
      ...customStyles.logo
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s',
      ...customStyles.link
    },
    activeLink: {
      color: theme.tertiaryColor,
      fontWeight: 'bold',
      ...customStyles.activeLink
    },
    productName: {
      fontWeight: 'bold',
      ...customStyles.productName
    }
  };
  
  return (
    <nav style={styles.navigation} className="navigation">
      <p style={styles.paragraph}>
        <img 
          src="/images/amexlogo.png" 
          alt="American Express" 
          width="55" 
          height="55" 
          style={styles.logo}
        />
      </p>
      
      {navigationLinks.map((link, index) => (
        <p key={index} style={styles.paragraph}>
          <Link 
            to={link.to} 
            className="nav-link" 
            style={styles.link}
          >
            {link.text}
          </Link>
        </p>
      ))}
      
      <p style={{...styles.paragraph, ...styles.productName}}>
        {productName}
      </p>
    </nav>
  );
};

export default Navigation;