// src/context/DataContext.js
import React, { createContext, useState, useContext } from 'react';
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
  try {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(!initialData);
    const [error, setError] = useState(null);

    // Function to update data
    const updateData = (newData) => {
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
    const fetchData = async (url) => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
        return jsonData;
      } catch (error) {
        Logger.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setIsLoading(false);
        return null;
      }
    };

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
  } catch (error) {
    Logger.error('Error in DataProvider:', error);
    return children; // Fallback to prevent breaking the app
  }
};

// Custom hook for using the data
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};