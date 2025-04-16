// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Logger } from './utils/Logger';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import MonthlySpendAnalysis from './pages/MonthlySpendAnalysis';
import MonthlySupplierCategoryAnalysis from './pages/MonthlySupplierCategoryAnalysis';
import MonthlySupplierAnalysis from './pages/MonthlySupplierAnalysis';
import Navigation from './components/Navigation';
import MemberDetails from './components/MemberDetails';
import BackToTopButton from './components/BackToTopButton';
import './styles/index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, we would fetch from an API
        // For now, we'll use the JSON data directly
        const response = await fetch('/data/test_data.json');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        Logger.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <Router>
      <div className="app">
        <Navigation data={data} />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Intro data={data} />} />
            <Route 
              path="/monthly-spend-analysis" 
              element={
                <>
                  <MemberDetails data={data} />
                  <MonthlySpendAnalysis data={data} />
                </>
              } 
            />
            <Route 
              path="/monthly-supplier-category-analysis" 
              element={
                <>
                  <MemberDetails data={data} />
                  <MonthlySupplierCategoryAnalysis data={data} />
                </>
              } 
            />
            <Route 
              path="/monthly-supplier-analysis" 
              element={
                <>
                  <MemberDetails data={data} />
                  <MonthlySupplierAnalysis data={data} />
                </>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BackToTopButton />
        </main>
        <Footer data={data} />
      </div>
    </Router>
  );
}

export default App;
