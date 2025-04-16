// src/pages/MonthlySupplierCategoryAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Logger } from '../utils/Logger';
import { ChartUtils } from '../utils/ChartUtils';
import Chart from 'chart.js/auto';

const MonthlySupplierCategoryAnalysis = ({ data }) => {
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

      // Create the chart
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
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
        }
      });

      // Create custom legend
      if (legendContainerRef.current) {
        legendContainerRef.current.innerHTML = '';
        chartData.forEach((dataset) => {
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
  }, [data]);

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

  return (
    <div id="monthly-supplier-category-analysis" className="monthly-supplier-category-analysis">
      <div className="cards">
        <div className="description">
          <p>
            Similar to the spend analysis, this monthly report provides you with a comprehensive 
            breakdown of your total American Express&reg; {productName} expenditure for each month. 
            In addition, you can view your year-to-date expenditure analysis per supplier category, eg airlines.
          </p>
        </div>

        <div className="tables">
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
            <button onClick={downloadCsv} className="download-csv">
              Download CSV
            </button>
          </p>
        </div>

        <div className="monthly-supplier-category-analysis-header">
          <p>Monthly supplier category analysis</p>
        </div>

        <div className="monthly-supplier-category-analysis-chart">
          <canvas ref={chartRef} id="monthly-supplier-category-analysis-chart"></canvas>
        </div>

        <div className="monthly-supplier-category-analysis-legend-container">
          <p className="monthly-supplier-category-analysis-legend-title">Key</p>
          <div ref={legendContainerRef} id="monthly-supplier-category-analysis-legend"></div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySupplierCategoryAnalysis;
