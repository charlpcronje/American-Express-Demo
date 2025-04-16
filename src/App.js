// src/App.js
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider, DataContext, useData } from './context/DataContext';
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
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import './styles/index.css';

// Main app content component
const AppContent = ({ dataUrl = '/data/test_data.json' }) => {
  const { data, fetchData, isLoading, error } = useData();

  Logger.debug('AppContent render', { dataUrl, isLoading, error });
  console.error('AppContent render', { dataUrl, isLoading, error });

  useEffect(() => {
    Logger.info('AppContent useEffect triggered', { dataUrl, fetchData });
    console.error('AppContent useEffect triggered', { dataUrl, fetchData });
    console.error('AppContent useEffect dependencies:', [fetchData, dataUrl]);
    const loadData = async () => {
      try {
        await fetchData(dataUrl);
      } catch (err) {
        Logger.error('Error in useEffect data loading:', err);
        console.error('Error in useEffect data loading:', err);
      }
    };

    loadData();
  }, [fetchData, dataUrl]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route 
              path="/monthly-spend-analysis" 
              element={
                <>
                  <MemberDetails />
                  <MonthlySpendAnalysis />
                </>
              } 
            />
            <Route 
              path="/monthly-supplier-category-analysis" 
              element={
                <>
                  <MemberDetails />
                  <MonthlySupplierCategoryAnalysis />
                </>
              } 
            />
            <Route 
              path="/monthly-supplier-analysis" 
              element={
                <>
                  <MemberDetails />
                  <MonthlySupplierAnalysis />
                </>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BackToTopButton />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// App component with theme and data providers
function App({ 
  initialTheme = {},
  initialData = null,
  dataUrl = '/data/test_data.json'
}) {
  Logger.debug('App render');
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <DataProvider initialData={initialData}>
        <AppContent dataUrl={dataUrl} />
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;