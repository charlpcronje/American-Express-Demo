// src/components/ErrorMessage.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ErrorMessage = ({ message = 'An error occurred.', retry = null }) => {
  const { theme } = useTheme();

  const errorStyle = {
    color: '#d32f2f',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffebee',
    borderRadius: '5px',
    margin: '20px auto',
    maxWidth: '500px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: theme.buttonColor,
    color: theme.buttonTextColor,
    padding: '8px 15px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9em',
    marginTop: '15px'
  };

  return (
    <div className="error" style={errorStyle}>
      <h3 style={{ marginBottom: '10px' }}>Error</h3>
      <p>{message}</p>
      {retry && (
        <button style={buttonStyle} onClick={retry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;