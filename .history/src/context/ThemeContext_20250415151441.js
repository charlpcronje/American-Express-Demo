// src/context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { Logger } from '../utils/Logger';

// Default theme values
const defaultTheme = {
  primaryColor: '#172B75',
  secondaryColor: '#0078C2',
  tertiaryColor: '#BDBDBD',
  backgroundColor: '#f7f7f7',
  textColor: '#333333',
  borderColor: '#e0e0e0',
  cardBackground: '#FFFFFF',
  linkColor: '#0078C2',
  buttonColor: '#0078C2',
  buttonTextColor: '#FFFFFF',
};

// Create the context
const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: () => {}
});

// Create a provider component
export const ThemeProvider = ({ children, initialTheme }) => {
  try {
    const [theme, setTheme] = useState({ ...defaultTheme, ...initialTheme });

    // Function to update theme
    const updateTheme = (newTheme) => {
      try {
        setTheme(prevTheme => ({ ...prevTheme, ...newTheme }));
        
        // Apply CSS variables to root element
        const root = document.documentElement;
        Object.entries({ ...theme, ...newTheme }).forEach(([key, value]) => {
          // Convert camelCase to kebab-case for CSS variables
          const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          root.style.setProperty(`--${cssVar}`, value);
        });
      } catch (error) {
        Logger.error('Error updating theme:', error);
      }
    };

    // Apply initial theme on mount
    React.useEffect(() => {
      updateTheme(theme);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  } catch (error) {
    Logger.error('Error in ThemeProvider:', error);
    return children; // Fallback to prevent breaking the app
  }
};

// Custom hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};