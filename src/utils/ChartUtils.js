// src/utils/ChartUtils.js
import { Logger } from './Logger';

/**
 * Utility class for chart operations
 */
class ChartUtilsClass {
  /**
   * Process monthly spend analysis chart data
   * @param {Object} data - The raw data object
   * @returns {Object} Processed chart data
   */
  processMonthlySpendData(data) {
    try {
      if (!data || !data.graphdata || !data.graphdata.spendanalysisgraph) {
        Logger.warn('No valid spend analysis data available');
        return {
          labels: [],
          datasets: []
        };
      }

      const labels = data.graphdata.spendanalysisgraph.labels || [];
      const rawData = data.graphdata.spendanalysisgraph.data || [];
      const previousYear = data.startYear;
      const currentYear = data.endYear;

      const chartData = {
        previousYear: Array(12).fill(0),
        currentYear: Array(12).fill(0),
      };

      // Parse the chart data
      rawData.forEach((item, index) => {
        const prevYearKey = `${previousYear}${String(index + 1).padStart(2, '0')}`;
        const currYearKey = `${currentYear}${String(index + 1).padStart(2, '0')}`;
        
        if (item[prevYearKey] !== null && item[prevYearKey] !== undefined && item[prevYearKey] !== 'null') {
          chartData.previousYear[index] = Number(item[prevYearKey]);
        }
        
        if (item[currYearKey] !== null && item[currYearKey] !== undefined && item[currYearKey] !== 'null') {
          chartData.currentYear[index] = Number(item[currYearKey]);
        }
      });

      return {
        labels,
        datasets: [
          {
            label: previousYear,
            data: chartData.previousYear,
            backgroundColor: '#172B75',
            borderColor: '#172B75',
            borderWidth: 1
          },
          {
            label: currentYear,
            data: chartData.currentYear,
            backgroundColor: '#0078C2',
            borderColor: '#0078C2',
            borderWidth: 1
          }
        ]
      };
    } catch (error) {
      Logger.error('Error processing monthly spend data:', error);
      return {
        labels: [],
        datasets: []
      };
    }
  }

  /**
   * Process supplier category analysis chart data
   * @param {Object} data - The raw data object
   * @returns {Object} Processed chart data
   */
  processCategoryData(data) {
    try {
      if (!data || !data.graphdata || !data.graphdata.suppliergraph) {
        Logger.warn('No valid supplier category data available');
        return {
          labels: [],
          datasets: []
        };
      }

      const labels = data.graphdata.suppliergraph.labels || [];
      const rawData = data.graphdata.suppliergraph.data || [];
      const colors = ['#172B75', '#0F458F', '#BDBDBD', '#0078C2'];
      
      const datasets = rawData.map((item, index) => ({
        label: item.category,
        data: [
          ((item[data.startYear] || 0) / 100),
          ((item[data.endYear] || 0) / 100)
        ],
        backgroundColor: colors[index % colors.length]
      }));

      return {
        labels,
        datasets
      };
    } catch (error) {
      Logger.error('Error processing category data:', error);
      return {
        labels: [],
        datasets: []
      };
    }
  }

  /**
   * Generate CSV from data tables
   * @param {Array} tableData - The table data array
   * @param {Array} headers - Column headers
   * @returns {string} CSV content
   */
  generateCSV(tableData, headers) {
    try {
      if (!tableData || !headers) {
        return '';
      }

      // Create header row
      const csvContent = [
        headers.join(','),
        ...tableData.map(row => {
          return headers.map(header => {
            // Get the value for this header/column
            const value = row[header] || '';
            // Escape quotes and wrap in quotes if contains comma
            return value.toString().includes(',') ? 
              `"${value.toString().replace(/"/g, '""')}"` : 
              value;
          }).join(',');
        })
      ].join('\n');

      return csvContent;
    } catch (error) {
      Logger.error('Error generating CSV:', error);
      return '';
    }
  }

  /**
   * Download data as CSV file
   * @param {string} csvContent - CSV content
   * @param {string} filename - Download filename
   */
  downloadCSV(csvContent, filename) {
    try {
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      Logger.error('Error downloading CSV:', error);
    }
  }
}

export const ChartUtils = new ChartUtilsClass();
