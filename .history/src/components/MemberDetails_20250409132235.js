// src/components/MemberDetails.js
import React from 'react';

const MemberDetails = ({ data }) => {
  if (!data) return null;

  const {
    clientName = '',
    reportPeriod = '',
    reportDate = '',
    accNumber = '',
  } = data;

  return (
    <div id="member-details" className="cards">
      <div className="card-member">
        <p>Card member</p>
        <p className="card-member-name">{clientName}</p>
      </div>

      <div className="card-member-details">
        <p className="card-member-details-title">Details</p>
        <p>Reporting period: {reportPeriod}</p>
        <p>Reporting generation date: {reportDate}</p>
        <p>Account number: {accNumber}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
