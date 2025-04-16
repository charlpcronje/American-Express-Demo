// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ data }) => {
  const productName = data?.PRODUCT || '';
  
  return (
    <nav className="navigation">
      <p>
        <img src="/images/amexlogo.png" alt="American Express" width="55" height="55" />
      </p>
      <p>
        <Link to="/monthly-spend-analysis" className="nav-link">Monthly Spend Analysis</Link>
      </p>
      <p>
        <Link to="/monthly-supplier-category-analysis" className="nav-link">Monthly supplier category analysis</Link>
      </p>
      <p>
        <Link to="/monthly-supplier-analysis" className="nav-link">Monthly supplier analysis</Link>
      </p>
      <p className="text-bold">{productName}</p>
    </nav>
  );
};

export default Navigation;
