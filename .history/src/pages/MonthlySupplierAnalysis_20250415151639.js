// src/pages/MonthlySpendAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Logger } from '../utils/Logger';
import { ChartUtils } from '../utils/ChartUtils';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import Chart from 'chart.js/auto';

const MonthlySpendAnalysis = () => {
  const { data } = useData();
  const { theme } = useTheme();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!data || !chartRef.current) return;

    try {
      const ctx = chartRef.current.getContext('2d');
      
      // Clean up any existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Process chart data using utility
      const chartData = ChartUtils.processMonthlySpendData(data);

      // Use theme colors
      if (chartData.datasets && chartData.datasets.length > 0) {
        chartData.datasets[0].backgroundColor = theme.primaryColor;
        chartData.datasets[0].borderColor = theme.primaryColor;
        
        if (chartData.datasets.length > 1) {
          chartData.datasets[1].backgroundColor = theme.secondaryColor;
          chartData.datasets[1].borderColor = theme.secondaryColor;
        }
      }

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
          }
        }
      });
    } catch (error) {
      Logger.error('Error creating chart:', error);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, theme]); // Re-run when theme changes

  if (!data) return null;

  const {
    PRODUCT: productName = '',
    currentYear = '',
    previousYear = '',
    currentMonthAmountTotal = '',
    currentMonthTransTotal = '',
    prevMonthAmountTotal = '',
    prevMonthTransTotal = '',
    cardMemberAmountsRepeat = []
  } = data;

  const downloadCsv = () => {
    try {
      Logger.info('Downloading Monthly Spend Analysis CSV');
      
      // Prepare data for CSV
      const headers = ['Month', 'Current Year Amount', 'Current Year Trans', 'Previous Year Amount', 'Previous Year Trans'];
      
      const tableData = cardMemberAmountsRepeat.map(item => ({
        'Month': item.month || '',
        'Current Year Amount': item.currentMonthAmount || '0.00',
        'Current Year Trans': item.currentMonthTrans || '0',
        'Previous Year Amount': item.prevMonthAmount || '0.00',
        'Previous Year Trans': item.prevMonthTrans || '0'
      }));
      
      // Add totals row
      tableData.push({
        'Month': 'Total',
        'Current Year Amount': currentMonthAmountTotal,
        'Current Year Trans': currentMonthTransTotal,
        'Previous Year Amount': prevMonthAmountTotal,
        'Previous Year Trans': prevMonthTransTotal
      });
      
      const csvContent = ChartUtils.generateCSV(tableData, headers);
      ChartUtils.downloadCSV(csvContent, 'monthly_spend_analysis.csv');
    } catch (error) {
      Logger.error('Error downloading CSV:', error);
    }
  };

  return (
    <div id="monthly-spend-analysis" className="monthly-spend-analysis">
      <div className="cards">
        <div className="description">
          <p>
            This report enables you to view monthly trends in your overall American Express&reg; {productName} spend 
            and transaction volumes for the year to date, with a year-on-year comparison.
          </p>
        </div>

        <div className="tables">
          <div className="table-container">
            <div>
              <p className="table-title">{currentYear} (current year)</p>

              <div className="table-container">
                <table id="current-year-monthly-table">
                  <caption>Monthly</caption>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Amount ( R )</th>
                      <th>Trans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardMemberAmountsRepeat.map((item, index) => (
                      <tr key={`current-monthly-${index}`}>
                        <td>{item.month?.substring(0, 3) || ''}</td>
                        <td>{item.currentMonthAmount || '0.00'}</td>
                        <td>{item.currentMonthTrans || '0'}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Total</td>
                      <td>{currentMonthAmountTotal}</td>
                      <td>{currentMonthTransTotal}</td>
                    </tr>
                  </tfoot>
                </table>

                <table id="current-year-ytd-table">
                  <caption>Year-To-Date</caption>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Amount ( R )</th>
                      <th>Trans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardMemberAmountsRepeat.map((item, index) => (
                      <tr key={`current-ytd-${index}`}>
                        <td>{item.month?.substring(0, 3) || ''}</td>
                        <td>{item.currentYtdAmount || '0.00'}</td>
                        <td>{item.currentYtdTrans || '0'}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div>
              <p className="table-title">{previousYear} (previous year)</p>

              <div className="table-container">
                <table id="prev-year-monthly-table">
                  <caption>Monthly</caption>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Amount ( R )</th>
                      <th>Trans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardMemberAmountsRepeat.map((item, index) => (
                      <tr key={`prev-monthly-${index}`}>
                        <td>{item.month?.substring(0, 3) || ''}</td>
                        <td>{item.prevMonthAmount || '0.00'}</td>
                        <td>{item.prevMonthTrans || '0'}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Total</td>
                      <td>{prevMonthAmountTotal}</td>
                      <td>{prevMonthTransTotal}</td>
                    </tr>
                  </tfoot>
                </table>

                <table id="prev-year-ytd-table">
                  <caption>Year-To-Date</caption>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Amount ( R )</th>
                      <th>Trans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardMemberAmountsRepeat.map((item, index) => (
                      <tr key={`prev-ytd-${index}`}>
                        <td>{item.month?.substring(0, 3) || ''}</td>
                        <td>{item.prevYtdAmount || '0.00'}</td>
                        <td>{item.prevYtdTrans || '0'}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <p className="text-right">
            <button onClick={downloadCsv} className="download-csv">Download CSV</button>
          </p>
        </div>

        <div className="monthly-spend-analysis-header">
          <p>Monthly spend analysis</p>
        </div>

        <div className="monthly-spend-analysis-chart">
          <canvas ref={chartRef} id="monthly-spend-analysis-chart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default MonthlySpendAnalysis;