// src/pages/MonthlySupplierAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Logger } from '../utils/Logger';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';

/**
 * MonthlySupplierAnalysis component
 * @param {Object} props - Component props
 * @param {Object} props.customStyles - Custom styles for the component
 * @param {Object} props.tableOptions - Custom DataTable options
 */
const MonthlySupplierAnalysis = ({ 
  customStyles = {},
  tableOptions = {}
}) => {
  const { data } = useData();
  const { theme } = useTheme();
  const tableRef = useRef(null);
  const dataTableInstance = useRef(null);

  useEffect(() => {
    if (!data || !tableRef.current) return;

    try {
      // Clean up any existing DataTable instance
      if (dataTableInstance.current) {
        dataTableInstance.current.destroy();
        dataTableInstance.current = null;
      }

      // Default options for DataTable
      const defaultOptions = {
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        responsive: true,
        lengthMenu: [10, 25, 50, 100],
        language: {
          search: 'Search:',
          lengthMenu: 'Show _MENU_ entries',
          info: 'Showing _START_ to _END_ of _TOTAL_ entries',
          paginate: {
            first: 'First',
            last: 'Last',
            next: 'Next',
            previous: 'Previous'
          }
        }
      };

      // Initialize DataTable with merged options
      dataTableInstance.current = $(tableRef.current).DataTable({
        ...defaultOptions,
        ...tableOptions
      });
    } catch (error) {
      Logger.error('Error initializing DataTable:', error);
    }

    return () => {
      if (dataTableInstance.current) {
        dataTableInstance.current.destroy();
        dataTableInstance.current = null;
      }
    };
  }, [data, tableOptions]);

  if (!data) return null;

  const {
    PRODUCT: productName = '',
    currentYear = '',
    previousYear = '',
    currentAmountTotal = '',
    currentTransTotal