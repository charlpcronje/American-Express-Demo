// src/pages/Intro.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';

/**
 * Intro component for the dashboard landing page
 * @param {Object} props - Component props
 * @param {Object} props.customStyles - Custom styles for the component
 * @param {string} props.bannerImage - Path to the banner image
 * @param {Array} props.cardImages - Array of paths to card images
 */
const Intro = ({ 
  customStyles = {},
  bannerImage = '/images/banner.png',
  cardImages = [
    '/images/card3.png',
    '/images/card2.png',
    '/images/card1.png'
  ]
}) => {
  const { data } = useData();
  const { theme } = useTheme();

  if (!data) return null;

  const {
    clientName = '',
    reportPeriod = '',
    reportDate = '',
    accNumber = '',
    PRODUCT: productName = '',
    currentYear = '',
    previousYear = '',
    currentAmountTotal = '',
    prevAmountTotal = '',
  } = data;

  // Combine default and custom styles
  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      ...customStyles.container
    },
    banner: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto 20px',
      ...customStyles.banner
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '40px',
      ...customStyles.cards
    },
    cardMember: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundImage: 'url(/images/mask.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
      ...customStyles.cardMember
    },
    cardMemberName: {
      fontWeight: 'bold',
      fontSize: '1.2em',
      marginTop: '10px',
      color: theme.primaryColor,
      ...customStyles.cardMemberName
    },
    cardMemberDetails: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      ...customStyles.cardMemberDetails
    },
    cardMemberDetailsTitle: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: theme.primaryColor,
      ...customStyles.cardMemberDetailsTitle
    },
    totalSpentThisYear: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      ...customStyles.totalSpentThisYear
    },
    totalSpentLastYear: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      ...customStyles.totalSpentLastYear
    },
    amount: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      margin: '10px 0',
      color: theme.primaryColor,
      ...customStyles.amount
    },
    caption: {
      fontSize: '0.9em',
      color: theme.textColor,
      ...customStyles.caption
    },
    monthlyCard: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...customStyles.monthlyCard
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
    },
    footer: {
      backgroundColor: theme.cardBackground,
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
      ...customStyles.footer
    }
  };

  return (
    <div id="intro" className="intro">
      <div style={styles.container}>
        <img src={bannerImage} alt="No more time wasted reconciling company expenses" style={styles.banner} />

        <div style={styles.cards}>
          <div style={styles.cardMember}>
            <p>Card member</p>
            <p style={styles.cardMemberName}>{clientName}</p>
          </div>

          <div style={styles.cardMemberDetails}>
            <p style={styles.cardMemberDetailsTitle}>Details</p>
            <p>Reporting period: {reportPeriod}</p>
            <p>Reporting generation date: {reportDate}</p>
            <p>Account number: {accNumber}</p>
            <p>Card type: {productName}</p>
          </div>

          <div style={styles.totalSpentThisYear}>
            <p>{currentYear}</p>
            <p style={styles.amount}>{currentAmountTotal}</p>
            <p style={styles.caption}>Total spent this year</p>
          </div>

          <div style={styles.totalSpentLastYear}>
            <p>{previousYear}</p>
            <p style={styles.amount}>{prevAmountTotal}</p>
            <p style={styles.caption}>Total spent last year</p>
          </div>

          <div style={styles.monthlyCard}>
            <p>
              <img src={cardImages[0]} alt="" width="32" height="35" />
            </p>
            <p>Monthly spend analysis</p>
            <p>
              <Link to="/monthly-spend-analysis" style={styles.button}>View Now</Link>
            </p>
          </div>

          <div style={styles.monthlyCard}>
            <p>
              <img src={cardImages[1]} alt="" width="32" height="35" />
            </p>
            <p>Monthly supplier category analysis</p>
            <p>
              <Link to="/monthly-supplier-category-analysis" style={styles.button}>View Now</Link>
            </p>
          </div>

          <div style={styles.monthlyCard}>
            <p>
              <img src={cardImages[2]} alt="" width="32" height="35" />
            </p>
            <p>Monthly supplier analysis</p>
            <p>
              <Link to="/monthly-supplier-analysis" style={styles.button}>View Now</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Intro;