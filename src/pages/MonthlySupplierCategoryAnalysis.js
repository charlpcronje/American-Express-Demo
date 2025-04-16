// src/pages/MonthlySupplierCategoryAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Logger } from '../utils/Logger';
import { ChartUtils } from '../utils/ChartUtils';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import Chart from 'chart.js/auto';

/**
 * MonthlySupplierCategoryAnalysis component
 * @param {Object} props - Component props
 * @param {Object} props.customStyles - Custom styles for the component
 * @param {Object} props.chartOptions - Custom chart options
 * @param {Function} props.onDownload - Custom download handler
 */
const MonthlySupplierCategoryAnalysis = ({ 
  customStyles = {},
  chartOptions = {},
  onDownload
}) => {
  const { data } = useData();
  const { theme } = useTheme();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const legendContainerRef = useRef(null);

  useEffect(() => {
    if (!data || !chartRef.current) return;

    try {
      const ctx = chartRef.current.getContext('2d');
      
      // Clean up any existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Process chart data using utility
      const chartData = ChartUtils.processCategoryData(data);

      // Apply theme colors to chart data
      if (chartData && chartData.datasets) {
        const themeColors = [
          theme.primaryColor,
          theme.secondaryColor,
          theme.tertiaryColor,
          '#0078C2' // Keep a fourth color as fallback
        ];
        
        chartData.datasets.forEach((dataset, index) => {
          dataset.backgroundColor = themeColors[index % themeColors.length];
        });
      }

      // Merge default options with custom options
      const defaultOptions = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
            onClick: null // Disable legend click
          }
        }
      };

      // Create the chart
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: { ...defaultOptions, ...chartOptions }
      });

      // Create custom legend
      if (legendContainerRef.current && chartData && chartData.datasets) {
        legendContainerRef.current.innerHTML = '';
        chartData.datasets.forEach((dataset) => {
          const legendItem = document.createElement('div');
          legendItem.className = 'legend-item';
          
          const colorBox = document.createElement('span');
          colorBox.className = 'color-box';
          colorBox.style.backgroundColor = dataset.backgroundColor;
          
          const labelText = document.createElement('span');
          labelText.textContent = dataset.label;
          
          legendItem.appendChild(colorBox);
          legendItem.appendChild(labelText);
          legendContainerRef.current.appendChild(legendItem);
        });
      }
    } catch (error) {
      Logger.error('Error creating chart:', error);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, theme, chartOptions]);

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
    categoryAnalysisRepeat = []
  } = data;

  const downloadCsv = () => {
    // Use custom download handler if provided
    if (onDownload) {
      onDownload(data);
      return;
    }

    try {
      Logger.info('Downloading Monthly Supplier Category Analysis CSV');
      
      // Prepare data for CSV
      const headers = ['Category', 'Current Year Amount', 'Current Year Trans', 'Current Year Avg', 'Previous Year Amount', 'Previous Year Trans', 'Previous Year Avg'];
      
      const tableData = categoryAnalysisRepeat.map(item => ({
        'Category': item.category || '',
        'Current Year Amount': item.currentAmount || '0.00',
        'Current Year Trans': item.currentTrans || '0',
        'Current Year Avg': item.currentAVGTransaction || '0.00',
        'Previous Year Amount': item.prevAmount || '0.00',
        'Previous Year Trans': item.prevTrans || '0',
        'Previous Year Avg': item.prevAVGTransaction || '0.00'
      }));
      
      // Add totals row
      tableData.push({
        'Category': 'Total',
        'Current Year Amount': currentAmountTotal,
        'Current Year Trans': currentTransTotal,
        'Current Year Avg': currentAvgAmountTotal,
        'Previous Year Amount': prevAmountTotal,
        'Previous Year Trans': prevTransTotal,
        'Previous Year Avg': prevAvgAmountTotal
      });
      
      const csvContent = ChartUtils.generateCSV(tableData, headers);
      ChartUtils.downloadCSV(csvContent, 'monthly_supplier_category_analysis.csv');
    } catch (error) {
      Logger.error('Error downloading CSV:', error);
    }
  };

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
      color: theme.textColor,
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
    header: {
      backgroundColor: theme.primaryColor,
      backgroundImage: 'url(/images/mask.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      color: 'white',
      padding: '15px',
      borderRadius: '5px 5px 0 0',
      marginBottom: '0',
      ...customStyles.header
    },
    chart: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '0 0 5px 5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      height: '400px',
      ...customStyles.chart
    },
    legendContainer: {
      backgroundColor: theme.cardBackground,
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      ...customStyles.legendContainer
    },
    legendTitle: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: theme.primaryColor,
      ...customStyles.legendTitle
    },
    downloadButton: {
      color: theme.linkColor,
      textDecoration: 'underline',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.9em',
      ...customStyles.downloadButton
    }
  };

  return (
    <div id="monthly-supplier-category-analysis" style={styles.container}>
      <div className="cards">
        <div style={styles.description}>
          <p>
            Similar to the spend analysis, this monthly report provides you with a comprehensive 
            breakdown of your total American Express&reg; {productName} expenditure for each month. 
            In addition, you can view your year-to-date expenditure analysis per supplier category, eg airlines.
          </p>
        </div>

        <div style={styles.tables}>
          <div className="table-container">
            <table id="current-year">
              <caption>Year-to-date {currentYear}</caption>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount (R)</th>
                  <th>Trans</th>
                  <th>Average Trans</th>
                </tr>
              </thead>
              <tbody>
                {categoryAnalysisRepeat.map((item, index) => (
                  <tr key={`current-${index}`}>
                    <td>{item.category || ''}</td>
                    <td>{item.currentAmount || '0.00'}</td>
                    <td>{item.currentTrans || '0'}</td>
                    <td>{item.currentAVGTransaction || '0.00'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{currentAmountTotal}</td>
                  <td>{currentTransTotal}</td>
                  <td>{currentAvgAmountTotal}</td>
                </tr>
              </tfoot>
            </table>

            <table id="previous-year">
              <caption>Year-To-Date {previousYear}</caption>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount (R)</th>
                  <th>Trans</th>
                  <th>Average Trans</th>
                </tr>
              </thead>
              <tbody>
                {categoryAnalysisRepeat.map((item, index) => (
                  <tr key={`prev-${index}`}>
                    <td>{item.category || ''}</td>
                    <td>{item.prevAmount || '0.00'}</td>
                    <td>{item.prevTrans || '0'}</td>
                    <td>{item.prevAVGTransaction || '0.00'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{prevAmountTotal}</td>
                  <td>{prevTransTotal}</td>
                  <td>{prevAvgAmountTotal}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-right">
            <button onClick={downloadCsv} style={styles.downloadButton}>
              Download CSV
            </button>
          </p>
        </div>

        <div style={styles.header}>
          <p>Monthly supplier category analysis</p>
        </div>

        <div style={styles.chart}>
          <canvas ref={chartRef} id="monthly-supplier-category-analysis-chart"></canvas>
        </div>

        <div style={styles.legendContainer}>
          <p style={styles.legendTitle}>Key</p>
          <div ref={legendContainerRef} id="monthly-supplier-category-analysis-legend"></div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySupplierCategoryAnalysis;