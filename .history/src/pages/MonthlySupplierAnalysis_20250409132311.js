// src/pages/MonthlySupplierAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Logger } from '../utils/Logger';
import $ from 'jquery';
import 'datatables.net';

const MonthlySupplierAnalysis = ({ data }) => {
  const tableRef = useRef(null);
  const dataTableInstance = useRef(null);

  useEffect(() => {
    if (!data || !tableRef.current) return;

    try {
      // Initialize DataTable
      if (!dataTableInstance.current) {
        dataTableInstance.current = $(tableRef.current).DataTable({
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
        });
      }
    } catch (error) {
      Logger.error('Error initializing DataTable:', error);
    }

    return () => {
      if (dataTableInstance.current) {
        dataTableInstance.current.destroy();
        dataTableInstance.current = null;
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
    subCategoryAnalysisRepeat = []
  } = data;

  return (
    <div id="monthly-supplier-analysis" className="monthly-supplier-analysis">
      <div className="cards">
        <div className="description">
          <p>
            This report provides a comprehensive breakdown of your total American Express&reg; {productName} expenditure 
            for each month. In addition, you can view your year-to-date expenditure analysis per supplier eg. XYZ Trading.
          </p>
        </div>

        <div className="tables">
          <table 
            ref={tableRef} 
            id="monthly-supplier-analysis-table" 
            className="display responsive nowrap"
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
                const isTotal = item.category?.startsWith('Total ') || false;
                
                return (
                  <tr 
                    key={`supplier-${index}`} 
                    className={isTotal ? 'total-line' : ''}
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
