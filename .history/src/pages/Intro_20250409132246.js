// src/pages/Intro.js
import React from 'react';
import { Link } from 'react-router-dom';

const Intro = ({ data }) => {
  if (!data) return null;

  const {
    clientName = '',
    reportPeriod = '',
    reportDate = '',
    accNumber = '',
    PRODUCT: productName = '',
    currentYear = '',
    previousYear = '',
    currentAmountTotal = '',
    prevAmountTotal = '',
  } = data;

  return (
    <div id="intro" className="intro">
      <div className="container">
        <img src="/images/banner.png" alt="No more time wasted reconciling company expenses" />

        <div className="cards">
          <div className="card-member">
            <p>Card member</p>
            <p className="card-member-name">{clientName}</p>
          </div>

          <div className="card-member-details">
            <p className="card-member-details-title">Details</p>
            <p>Reporting period: {reportPeriod}</p>
            <p>Reporting generation date: {reportDate}</p>
            <p>Account number: {accNumber}</p>
            <p>Card type: {productName}</p>
          </div>

          <div className="total-spent-this-year">
            <p>{currentYear}</p>
            <p className="amount">{currentAmountTotal}</p>
            <p className="caption">Total spent this year</p>
          </div>

          <div className="total-spent-last-year">
            <p>{previousYear}</p>
            <p className="amount">{prevAmountTotal}</p>
            <p className="caption">Total spent last year</p>
          </div>

          <div className="card1 monthly-cards">
            <p>
              <img src="/images/card3.png" alt="" width="32" height="35" />
            </p>
            <p>Monthly spend analysis</p>
            <p>
              <Link to="/monthly-spend-analysis" className="button">View Now</Link>
            </p>
          </div>

          <div className="card2 monthly-cards">
            <p>
              <img src="/images/card2.png" alt="" width="32" height="35" />
            </p>
            <p>Monthly supplier category analysis</p>
            <p>
              <Link to="/monthly-supplier-category-analysis" className="button">View Now</Link>
            </p>
          </div>

          <div className="card3 monthly-cards">
            <p>
              <img src="/images/card1.png" alt="" width="32" height="35" />
            </p>
            <p>Monthly supplier analysis</p>
            <p>
              <Link to="/monthly-supplier-analysis" className="button">View Now</Link>
            </p>
          </div>
        </div>

        <div className="footer">
          <img src="/images/slogan.png" alt="Don't do business without it" width="350" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
