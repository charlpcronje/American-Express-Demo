// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Logger } from '../utils/Logger';

// Light and dark theme values
const lightTheme = {
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
  mode: 'light',
};
const darkTheme = {
  primaryColor: '#90caf9',
  secondaryColor: '#1976d2',
  tertiaryColor: '#424242',
  backgroundColor: '#181A20',
  textColor: '#e0e0e0',
  borderColor: '#333',
  cardBackground: '#23272f',
  linkColor: '#90caf9',
  buttonColor: '#1976d2',
  buttonTextColor: '#fff',
  mode: 'dark',
};

const defaultTheme = lightTheme;

// Create the context
const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: () => {},
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children, initialTheme }) => {
  // Get system preference on first load
  const getPreferredTheme = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('themeMode');
      if (stored) return stored === 'dark' ? darkTheme : lightTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return darkTheme;
      }
    }
    return lightTheme;
  };

  const [theme, setTheme] = useState(() => ({ ...defaultTheme, ...initialTheme, ...getPreferredTheme() }));

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

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prev => {
      const nextTheme = prev.mode === 'dark' ? lightTheme : darkTheme;
      // Apply CSS variables immediately
      const root = document.documentElement;
      Object.entries(nextTheme).forEach(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
      });
      localStorage.setItem('themeMode', nextTheme.mode);
      return nextTheme;
    });
  };

  // On mount, apply theme CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--${cssVar}`, value);
    });
    localStorage.setItem('themeMode', theme.mode);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};