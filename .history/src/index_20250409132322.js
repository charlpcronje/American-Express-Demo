// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Logger } from './utils/Logger';

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
