// src/pages/MonthlySupplierAnalysis.js
import React, { useEffect, useRef, useState } from 'react';
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
  const [hoveredTotalRow, setHoveredTotalRow] = useState(null);
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
    currentTransTotal = '',
    currentAvgAmountTotal = '',
    prevAmountTotal = '',
    prevTransTotal = '',
    prevAvgAmountTotal = '',
    subCategoryAnalysisRepeat = []
  } = data;

  // Combine default and custom styles
  const styles = {
    container: {
      marginBottom: '40px',
      ...customStyles.container
    },
    description: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      ...customStyles.description
    },
    tables: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      overflowX: 'auto',
      ...customStyles.tables
    },
    table: {
      width: '100%',
      ...customStyles.table
    }
  };

  return (
    <div id="monthly-supplier-analysis" style={styles.container}>
      <div className="cards">
        <div style={styles.description}>
          <p>
            This report provides a comprehensive breakdown of your total American Express&reg; {productName} expenditure 
            for each month. In addition, you can view your year-to-date expenditure analysis per supplier eg. XYZ Trading.
          </p>
        </div>

        <div style={styles.tables}>
          <table 
            ref={tableRef} 
            id="monthly-supplier-analysis-table" 
            className="display responsive nowrap"
            style={styles.table}
          >
            <thead>
              <tr>
                <th rowSpan="2" className="caption">Supplier Category</th>
                <th rowSpan="2" className="caption">Supplier</th>
                <th colSpan="3" className="caption">Year-to-date {currentYear}</th>
                <th colSpan="3" className="caption">Year-to-date {previousYear}</th>
              </tr>
              <tr>
                <th>Amount (R)</th>
                <th>Trans</th>
                <th>Avg. trans</th>
                <th>Amount (R)</th>
                <th>Trans</th>
                <th>Avg. trans</th>
              </tr>
            </thead>
            <tbody>
              {subCategoryAnalysisRepeat.map((item, index) => {
                const isTotalGroup = totalStartIndex !== -1 && index >= totalStartIndex && index < totalStartIndex + 3;
                const rowClass = [
                  item.category?.startsWith('Total ') ? 'total-line' : '',
                  isTotalGroup ? 'total-group-row' : '',
                  isTotalGroup && groupHovered ? 'total-group-lift' : ''
                ].filter(Boolean).join(' ');
                return (
                  <tr
                    key={`supplier-${index}`}
                    className={rowClass}
                    onMouseEnter={isTotalGroup ? () => setGroupHovered(true) : undefined}
                    onMouseLeave={isTotalGroup ? () => setGroupHovered(false) : undefined}
                  >
                    <td>{item.category || ''}</td>
                    <td>{item.discription || ''}</td>
                    <td>{item.currentAmount || '0.00'}</td>
                    <td>{item.currentTrans || '0'}</td>
                    <td>{item.currentAVGTransaction || '0.00'}</td>
                    <td>{item.prevAmount || '0.00'}</td>
                    <td>{item.prevTrans || '0'}</td>
                    <td>{item.prevAVGTransaction || '0.00'}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Totals</td>
                <td>{currentAmountTotal}</td>
                <td>{currentTransTotal}</td>
                <td>{currentAvgAmountTotal}</td>
                <td>{prevAmountTotal}</td>
                <td>{prevTransTotal}</td>
                <td>{prevAvgAmountTotal}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonthlySupplierAnalysis;