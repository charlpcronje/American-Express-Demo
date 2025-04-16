// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Logger } from './utils/Logger';

/**
 * Main entry point for the application
 * 
 * You can customize the application by providing:
 * - initialTheme: Theme object with color overrides
 * - initialData: Data object to use instead of fetching
 * - dataUrl: URL to fetch data from
 * 
 * Example:
 * 
 * <App 
 *   initialTheme={{
 *     primaryColor: '#ff0000',
 *     secondaryColor: '#00ff00'
 *   }}
 *   initialData={yourDataObject}
 *   dataUrl="/api/custom-data.json"
 * />
 */
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  Logger.error('Error rendering application:', error);
}