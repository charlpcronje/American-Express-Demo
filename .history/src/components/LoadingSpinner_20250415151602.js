// src/components/LoadingSpinner.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  const { theme } = useTheme();

  const spinnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: theme.primaryColor
  };

  const spinner = {
    border: `4px solid ${theme.backgroundColor}`,
    borderTop: `4px solid ${theme.primaryColor}`,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
    marginBottom: '20px'
  };

  return (
    <div className="loading" style={spinnerStyle}>
      <div className="spinner" style={spinner}></div>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{message}</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;