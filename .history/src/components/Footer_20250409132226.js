// src/components/Footer.js
import React from 'react';
import { Logger } from '../utils/Logger';

const Footer = ({ data }) => {
  // Track link clicks
  const trackClick = (clickName, e) => {
    try {
      const element = e.target;
      // Implementation of tracking logic based on the original code
      Logger.info(`Tracking click: ${clickName}`);
      
      // This would be the actual implementation in a real app
      /* 
      const hotSpotData = {
        RunId: RunProfileID,
        RecipientId: RecipientID,
        Action: clickName,
        Label: clickName,
        Tags: [Trial === 'True' ? 'Trial' : 'Live', RunName],
        Coordinates: {
          X: Math.round(element.getBoundingClientRect().x),
          Y: Math.round(element.getBoundingClientRect().y),
        },
      };

      fetch(baseUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotSpotData),
      });
      */
    } catch (error) {
      Logger.error('Error tracking click:', error);
    }
  };

  // Links would come from API in a real app
  const contactUsLink = "https://www.americanexpress.com/en-za/network/help/get-in-touch/?inav=za_footer_get_in_touch";
  const facebookLink = "https://www.facebook.com/AmericanExpressSA/";
  const privacyLink = "https://www.americanexpress.com/en-za/network/legal/privacy-statement.html?inav=za_footer_privacy_statement";

  return (
    <footer className="footer">
      <div className="footer-slogan">
        <img src="/images/slogan.png" alt="Don't do business without it" width="302" height="30" />
      </div>

      <div className="footer-links">
        <a 
          href={privacyLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => trackClick('privacy', e)}
        >
          Privacy
        </a>
        <a 
          href={contactUsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => trackClick('contactus', e)}
        >
          Contact us
        </a>
      </div>

      <div className="footer-disclaimer">
        <p>Terms and Conditions apply.</p>

        <p>
          <a 
            href={facebookLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="facebook-link"
            onClick={(e) => trackClick('facebook', e)}
          >
            <img src="/images/facebook.png" alt="" width="27" height="27" />
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
