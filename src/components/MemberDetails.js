// src/components/MemberDetails.js
import React from 'react';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';

const MemberDetails = ({ customStyles = {} }) => {
  const { data } = useData();
  const { theme } = useTheme();
  
  if (!data) return null;

  const {
    clientName = '',
    reportPeriod = '',
    reportDate = '',
    accNumber = '',
  } = data;

  // Merge theme-based styles with custom styles
  const combinedStyles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px',
      ...customStyles.container
    },
    cardMember: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: `0 2px 5px rgba(0, 0, 0, 0.1)`,
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
      boxShadow: `0 2px 5px rgba(0, 0, 0, 0.1)`,
      ...customStyles.cardMemberDetails
    },
    cardMemberDetailsTitle: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: theme.primaryColor,
      ...customStyles.cardMemberDetailsTitle
    }
  };

  return (
    <div id="member-details" style={combinedStyles.container}>
      <div style={combinedStyles.cardMember}>
        <p>Card member</p>
        <p style={combinedStyles.cardMemberName}>{clientName}</p>
      </div>

      <div style={combinedStyles.cardMemberDetails}>
        <p style={combinedStyles.cardMemberDetailsTitle}>Details</p>
        <p>Reporting period: {reportPeriod}</p>
        <p>Reporting generation date: {reportDate}</p>
        <p>Account number: {accNumber}</p>
      </div>
    </div>
  );
};

export default MemberDetails;