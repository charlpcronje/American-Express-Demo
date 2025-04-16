// src/context/DataContext.js
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { Logger } from '../utils/Logger';

// Create the context
const DataContext = createContext({
  data: null,
  setData: () => {},
  isLoading: true,
  error: null
});

// Create a provider component
export const DataProvider = ({ children, initialData = null }) => {
  Logger.debug('DataProvider render', { initialData });
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [error, setError] = useState(null);

  // Function to update data
  const updateData = (newData) => {
    Logger.info('updateData called', newData);
    try {
      setData(newData);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      Logger.error('Error updating data:', error);
      setError('Error updating data');
    }
  };

  // Function to fetch data
  const fetchData = useCallback(async (url) => {
    Logger.info('fetchData called', url);
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      const jsonData = await response.json();
      Logger.debug('fetchData received data', jsonData);
      setData(jsonData);
      setIsLoading(false);
      return jsonData;
    } catch (error) {
      Logger.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
      setIsLoading(false);
      return null;
    }
  }, []);

  useEffect(() => {
    Logger.debug('DataProvider state changed', { data, isLoading, error });
  }, [data, isLoading, error]);

  useEffect(() => {
    Logger.debug('DataProvider render with children', children);
  }, [children]);

  return (
    <DataContext.Provider value={{ 
      data, 
      setData: updateData, 
      fetchData,
      isLoading, 
      error 
    }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for using the data
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};