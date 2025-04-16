// src/components/Footer.js
import React from 'react';
import { Logger } from '../utils/Logger';
import { useTheme } from '../context/ThemeContext';

/**
 * Footer component
 * @param {Object} props - Component props
 * @param {Object} props.links - Custom links to override defaults
 * @param {string} props.sloganImage - Path to slogan image
 * @param {string} props.facebookImage - Path to Facebook icon
 * @param {function} props.onLinkClick - Custom tracking function
 * @param {Object} props.customStyles - Custom styles to override defaults
 */
const Footer = ({ 
  links, 
  sloganImage = '/images/slogan.png',
  facebookImage = '/images/facebook.png',
  onLinkClick,
  customStyles = {}
}) => {
  const { theme } = useTheme();

  // Default links
  const defaultLinks = {
    privacy: "https://www.americanexpress.com/en-za/network/legal/privacy-statement.html?inav=za_footer_privacy_statement",
    contactUs: "https://www.americanexpress.com/en-za/network/help/get-in-touch/?inav=za_footer_get_in_touch",
    facebook: "https://www.facebook.com/AmericanExpressSA/"
  };

  // Use provided links or defaults
  const footerLinks = links || defaultLinks;

  // Track link clicks
  const trackClick = (clickName, e) => {
    try {
      // Use custom tracking if provided
      if (onLinkClick) {
        onLinkClick(clickName, e);
        return;
      }

      const element = e.target;
      // Implementation of tracking logic based on the original code
      Logger.info(`Tracking click: ${clickName}`);
    } catch (error) {
      Logger.error('Error tracking click:', error);
    }
  };

  // Combine default and custom styles
  const styles = {
    footer: {
      backgroundColor: theme.cardBackground,
      padding: '20px',
      textAlign: 'center',
      marginTop: '40px',
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
      ...customStyles.footer
    },
    slogan: {
      marginBottom: '20px',
      ...customStyles.slogan
    },
    links: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '20px',
      ...customStyles.links
    },
    link: {
      color: theme.linkColor,
      textDecoration: 'none',
      ...customStyles.link
    },
    disclaimer: {
      fontSize: '0.8em',
      color: '#666',
      lineHeight: 1.4,
      ...customStyles.disclaimer
    },
    facebookLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      color: theme.linkColor,
      textDecoration: 'none',
      margin: '10px 0',
      ...customStyles.facebookLink
    }
  };

  return (
    <footer style={styles.footer} className="footer">
      <div style={styles.slogan} className="footer-slogan">
        <img src={sloganImage} alt="Don't do business without it" width="302" height="30" />
      </div>

      <div style={styles.links} className="footer-links">
        <a 
          href={footerLinks.privacy} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => trackClick('privacy', e)}
          style={styles.link}
        >
          Privacy
        </a>
        <a 
          href={footerLinks.contactUs} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => trackClick('contactus', e)}
          style={styles.link}
        >
          Contact us
        </a>
      </div>

      <div style={styles.disclaimer} className="footer-disclaimer">
        <p>Terms and Conditions apply.</p>

        <p>
          <a 
            href={footerLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.facebookLink}
            className="facebook-link"
            onClick={(e) => trackClick('facebook', e)}
          >
            <img src={facebookImage} alt="" width="27" height="27" />
            Like us on Facebook @AmericanExpressSA
          </a>
        </p>

        <p>
          American Express is a registered trademark of American Express<sup>&reg;</sup>. 
          American Express Cards is operated under license in South Africa by Nedbank Ltd 
          Reg No 1951/000009/06, authorised financial services and registered credit provider (NCRCP16).
        </p>
      </div>
    </footer>
  );
};

export default Footer;