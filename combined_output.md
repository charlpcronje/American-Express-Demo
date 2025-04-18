# Combined Markdown Export

Generated: 2025-04-15T13:11:32.866662


## Index

- `.gitignore` — ~38 tokens
- `README.md` — ~409 tokens
- `build\data\test_data.json` — ~0 tokens
- `build\images\favicon.ico` — ~47 tokens
- `package.json` — ~115 tokens
- `public\data\test_data.json` — ~0 tokens
- `public\images\favicon.ico` — ~47 tokens
- `public\index.html` — ~94 tokens
- `src\App.js` — ~320 tokens
- `src\components\BackToTopButton.js` — ~102 tokens
- `src\components\Footer.js` — ~337 tokens
- `src\components\Header.js` — ~38 tokens
- `src\components\MemberDetails.js` — ~90 tokens
- `src\components\Navigation.js` — ~91 tokens
- `src\index.js` — ~54 tokens
- `src\pages\Intro.js` — ~275 tokens
- `src\pages\MonthlySpendAnalysis.js` — ~691 tokens
- `src\pages\MonthlySupplierAnalysis.js` — ~424 tokens
- `src\pages\MonthlySupplierCategoryAnalysis.js` — ~724 tokens
- `src\styles\index.css` — ~1009 tokens
- `src\utils\ChartUtils.js` — ~663 tokens
- `src\utils\Logger.js` — ~131 tokens

**Total tokens: ~5699**

---

### `.gitignore`

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### `README.md`

```md
# American Express Reports Dashboard

This React application provides a dashboard for American Express corporate card reports. It visualizes spending data, supplier categories, and transaction information for card members.

## Features

- Interactive dashboard with multiple report views
- Detailed monthly spend analysis with year-to-year comparison
- Supplier category analysis with visual breakdowns
- Supplier transaction details
- Data tables with sorting and filtering
- Interactive charts for data visualization
- Responsive design for all device sizes

## Tech Stack

- React for UI components
- React Router for navigation
- Chart.js for data visualization
- DataTables for interactive tables
- CSS for styling

## Project Structure

The project follows a modular component-based architecture:

- `components/` - Reusable UI components
- `pages/` - Main page views
- `utils/` - Utility classes like Logger
- `styles/` - CSS styling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/amex-reports-dashboard.git
cd amex-reports-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser at http://localhost:3000

## Data Source

The application uses a JSON data file located in the `public/data` directory. In a production environment, this would be replaced with an API call to fetch the data from a server.

## Customization

### Styling

The application uses CSS variables for theming. You can modify the colors and styles by editing the variables in `src/styles/index.css`.

### Adding New Reports

To add new report types:

1. Create a new component in the `pages` directory
2. Add a new route in `App.js`
3. Add a navigation link in the `Navigation` component

## Deployment

To build the application for production:

```bash
npm run build
```

This will create a `build` directory with optimized production files.

## License

[Include license information here]
```

### `build\data\test_data.json`

```json

```

### `build\images\favicon.ico`

```ico
PNG

   
IHDR           szz  IDATX݋UU9K0:D\$QŀfdЅ/]82"DJSMtQdMLA`ЅLhڵ>퐿skYk=K:*X|Xu<4=sq;K?`90605c^(nx"a<уk8ڧ1.
MoAe\4~,<@ :6_ߊob7 {aU.p?0)xd ؘOcvA;+ixO1\u7RZk9>I@Ej"Hv5)bV7	67Zdz
[ds7(	Q=ׄq=(
&}[P͍${r *nJό	 h 1 Ɨb23b/ Dp@7
 Si7n%
 m
`Dna.aV@T5vb	V8,jn@߈x<PX=,d>~EiYu\c4>j{qD$3_b ]l*"Fۇ] [E]n#uQ5/$%6Ey"AM}5x(k槩O0z)f΋uOv9g8e)ΈOj-Վ]/MѺh-ȶ    IENDB`
```

### `package.json`

```json
{
  "name": "amex-reports-dashboard",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "chart.js": "^4.2.1",
    "datatables.net": "^1.13.4",
    "datatables.net-dt": "^1.13.4",
    "datatables.net-responsive": "^2.4.1",
    "jquery": "^3.6.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### `public\data\test_data.json`

```json

```

### `public\images\favicon.ico`

```ico
PNG

   
IHDR           szz  IDATX݋UU9K0:D\$QŀfdЅ/]82"DJSMtQdMLA`ЅLhڵ>퐿skYk=K:*X|Xu<4=sq;K?`90605c^(nx"a<уk8ڧ1.
MoAe\4~,<@ :6_ߊob7 {aU.p?0)xd ؘOcvA;+ixO1\u7RZk9>I@Ej"Hv5)bV7	67Zdz
[ds7(	Q=ׄq=(
&}[P͍${r *nJό	 h 1 Ɨb23b/ Dp@7
 Si7n%
 m
`Dna.aV@T5vb	V8,jn@߈x<PX=,d>~EiYu\c4>j{qD$3_b ]l*"Fۇ] [E]n#uQ5/$%6Ey"AM}5x(k槩O0z)f΋uOv9g8e)ΈOj-Վ]/MѺh-ȶ    IENDB`
```

### `public\index.html`

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/images/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#172B75" />
    <meta
      name="description"
      content="American Express Corporate Card Reports Dashboard"
    />
    <title>American Express Reports</title>
    <!-- Preload essential images -->
    <link rel="preload" href="%PUBLIC_URL%/images/header.png" as="image" />
    <link rel="preload" href="%PUBLIC_URL%/images/mask.png" as="image" />
    <link rel="preload" href="%PUBLIC_URL%/images/banner.png" as="image" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### `src\App.js`

```js
// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Logger } from './utils/Logger';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import MonthlySpendAnalysis from './pages/MonthlySpendAnalysis';
import MonthlySupplierCategoryAnalysis from './pages/MonthlySupplierCategoryAnalysis';
import MonthlySupplierAnalysis from './pages/MonthlySupplierAnalysis';
import Navigation from './components/Navigation';
import MemberDetails from './components/MemberDetails';
import BackToTopButton from './components/BackToTopButton';
import './styles/index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, we would fetch from an API
        // For now, we'll use the JSON data directly
        const response = await fetch('/data/test_data.json');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        Logger.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <Router>
      <div className="app">
        <Navigation data={data} />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Intro data={data} />} />
            <Route 
              path="/monthly-spend-analysis" 
              element={
                <>
                  <MemberDetails data={data} />
                  <MonthlySpendAnalysis data={data} />
                </>
              } 
            />
            <Route 
              path="/monthly-supplier-category-analysis" 
              element={
                <>
                  <MemberDetails data={data} />
                  <MonthlySupplierCategoryAnalysis data={data} />
                </>
              } 
            />
            <Route 
              path="/monthly-supplier-analysis" 
              element={
                <>
                  <MemberDetails data={data} />
                  <MonthlySupplierAnalysis data={data} />
                </>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BackToTopButton />
        </main>
        <Footer data={data} />
      </div>
    </Router>
  );
}

export default App;
```

### `src\components\BackToTopButton.js`

```js
// src/components/BackToTopButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackToTopButton = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="buttons" className="text-right">
      <div id="back-to-intro">
        <Link to="/" className="button">Home</Link>
      </div>

      <div id="back-to-top">
        <button onClick={scrollToTop} className="button">Back To Top &#129129;</button>
      </div>
    </div>
  );
};

export default BackToTopButton;
```

### `src\components\Footer.js`

```js
// src/components/Footer.js
import React from 'react';
import { Logger } from '../utils/Logger';

const Footer = ({ data }) => {
  // Track link clicks
  const trackClick = (clickName, e) => {
    try {
      const element = e.target;
      // Implementation of tracking logic based on the original code
      Logger.info(`Tracking click: ${clickName}`);
      
      // This would be the actual implementation in a real app
      /* 
      const hotSpotData = {
        RunId: RunProfileID,
        RecipientId: RecipientID,
        Action: clickName,
        Label: clickName,
        Tags: [Trial === 'True' ? 'Trial' : 'Live', RunName],
        Coordinates: {
          X: Math.round(element.getBoundingClientRect().x),
          Y: Math.round(element.getBoundingClientRect().y),
        },
      };

      fetch(baseUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotSpotData),
      });
      */
    } catch (error) {
      Logger.error('Error tracking click:', error);
    }
  };

  // Links would come from API in a real app
  const contactUsLink = "https://www.americanexpress.com/en-za/network/help/get-in-touch/?inav=za_footer_get_in_touch";
  const facebookLink = "https://www.facebook.com/AmericanExpressSA/";
  const privacyLink = "https://www.americanexpress.com/en-za/network/legal/privacy-statement.html?inav=za_footer_privacy_statement";

  return (
    <footer className="footer">
      <div className="footer-slogan">
        <img src="/images/slogan.png" alt="Don't do business without it" width="302" height="30" />
      </div>

      <div className="footer-links">
        <a 
          href={privacyLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => trackClick('privacy', e)}
        >
          Privacy
        </a>
        <a 
          href={contactUsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => trackClick('contactus', e)}
        >
          Contact us
        </a>
      </div>

      <div className="footer-disclaimer">
        <p>Terms and Conditions apply.</p>

        <p>
          <a 
            href={facebookLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="facebook-link"
            onClick={(e) => trackClick('facebook', e)}
          >
            <img src="/images/facebook.png" alt="" width="27" height="27" />
            Like us on Facebook @AmericanExpressSA
          </a>
        </p>

        <p>
          American Express is a registered trademark of American Express<sup>&reg;</sup>. 
          American Express Cards is operated under license in South Africa by Nedbank Ltd 
          Reg No 1951/000009/06, authorised financial services and registered credit provider (NCRCP16).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```

### `src\components\Header.js`

```js
// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img src="/images/header.png" alt="American Express" width="304" height="38" />
    </div>
  );
};

export default Header;
```

### `src\components\MemberDetails.js`

```js
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
```

### `src\components\Navigation.js`

```js
// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ data }) => {
  const productName = data?.PRODUCT || '';
  
  return (
    <nav className="navigation">
      <p>
        <img src="/images/amexlogo.png" alt="American Express" width="55" height="55" />
      </p>
      <p>
        <Link to="/monthly-spend-analysis" className="nav-link">Monthly Spend Analysis</Link>
      </p>
      <p>
        <Link to="/monthly-supplier-category-analysis" className="nav-link">Monthly supplier category analysis</Link>
      </p>
      <p>
        <Link to="/monthly-supplier-analysis" className="nav-link">Monthly supplier analysis</Link>
      </p>
      <p className="text-bold">{productName}</p>
    </nav>
  );
};

export default Navigation;
```

### `src\index.js`

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Logger } from './utils/Logger';

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  Logger.error('Error rendering application:', error);
}
```

### `src\pages\Intro.js`

```js
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
```

### `src\pages\MonthlySpendAnalysis.js`

```js
// src/pages/MonthlySpendAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Logger } from '../utils/Logger';
import { ChartUtils } from '../utils/ChartUtils';
import Chart from 'chart.js/auto';

const MonthlySpendAnalysis = ({ data }) => {
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
  }, [data]);

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
```

### `src\pages\MonthlySupplierAnalysis.js`

```js
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
```

### `src\pages\MonthlySupplierCategoryAnalysis.js`

```js
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
```

### `src\styles\index.css`

```css
/* src/styles/index.css */
:root {
  --primary-color: #172B75;
  --secondary-color: #0078C2;
  --tertiary-color: #BDBDBD;
  --background-color: #f7f7f7;
  --text-color: #333333;
  --border-color: #e0e0e0;
  --card-background: white;
  --link-color: #0078C2;
  --button-color: #0078C2;
  --button-text-color: white;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navigation */
.navigation {
  display: none; /* Initially hidden as in original */
  width: 200px;
  background-color: var(--primary-color);
  color: white;
  padding: 20px;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 100;
}

.navigation p {
  margin-bottom: 15px;
}

.navigation img {
  display: block;
  margin: 0 auto 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--tertiary-color);
}

/* Main Content */
main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 20px;
}

/* Member Details */
#member-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.card-member, 
.card-member-details {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-member {
  background-image: url('/images/mask.png');
  background-repeat: no-repeat;
  background-position: right bottom;
}

.card-member-name {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 10px;
}

.card-member-details-title {
  font-weight: bold;
  margin-bottom: 10px;
}

/* Intro Page */
.intro .container {
  max-width: 1000px;
  margin: 0 auto;
}

.intro img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}

.intro .cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.total-spent-this-year,
.total-spent-last-year {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.amount {
  font-size: 1.8em;
  font-weight: bold;
  margin: 10px 0;
  color: var(--primary-color);
}

.caption {
  font-size: 0.9em;
  color: var(--text-color);
}

.monthly-cards {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.monthly-cards p {
  margin-bottom: 15px;
}

.button {
  display: inline-block;
  background-color: var(--button-color);
  color: var(--button-text-color);
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: var(--primary-color);
}

/* Monthly Analysis Pages */
.monthly-spend-analysis,
.monthly-supplier-category-analysis,
.monthly-supplier-analysis {
  margin-bottom: 40px;
}

.description {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.tables {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow-x: auto;
}

.table-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .table-container {
    grid-template-columns: 1fr;
  }
}

.table-title {
  font-weight: bold;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

caption {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
}

th, td {
  border: 1px solid var(--border-color);
  padding: 8px;
  text-align: left;
}

th {
  background-color: var(--tertiary-color);
  font-weight: bold;
}

tfoot td {
  font-weight: bold;
}

.text-right {
  text-align: right;
}

.download-csv {
  color: var(--link-color);
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
}

.download-csv:hover {
  text-decoration: none;
}

.monthly-spend-analysis-header,
.monthly-supplier-category-analysis-header {
  background-color: var(--primary-color);
  background-image: url('/images/mask.png');
  background-repeat: no-repeat;
  background-position: right center;
  color: white;
  padding: 15px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0;
}

.monthly-spend-analysis-chart,
.monthly-supplier-category-analysis-chart {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  height: 400px;
}

.monthly-supplier-category-analysis-legend-container {
  background-color: var(--card-background);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.monthly-supplier-category-analysis-legend-title {
  font-weight: bold;
  margin-bottom: 10px;
}

#monthly-supplier-category-analysis-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.color-box {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 3px;
}

.total-line {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* Back to top button */
#buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* Footer */
.footer {
  background-color: var(--card-background);
  padding: 20px;
  text-align: center;
  margin-top: 40px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.footer-slogan {
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.footer-links a {
  color: var(--link-color);
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-disclaimer {
  font-size: 0.8em;
  color: #666;
  line-height: 1.4;
}

.facebook-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: var(--link-color);
  text-decoration: none;
  margin: 10px 0;
}

.facebook-link:hover {
  text-decoration: underline;
}

.hidden {
  display: none;
}

/* Utility classes */
.text-bold {
  font-weight: bold;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
  color: var(--primary-color);
}

.error {
  color: red;
  text-align: center;
  padding: 20px;
  background-color: #ffebee;
  border-radius: 5px;
  margin: 20px auto;
  max-width: 500px;
}
```

### `src\utils\ChartUtils.js`

```js
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
```

### `src\utils\Logger.js`

```js
// src/utils/Logger.js
class LoggerClass {
  constructor() {
    this.logLevel = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
    this.levels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
  }

  setLogLevel(level) {
    if (this.levels[level] !== undefined) {
      this.logLevel = level;
    } else {
      console.error(`Invalid log level: ${level}`);
    }
  }

  debug(...args) {
    if (this.levels[this.logLevel] <= this.levels.debug) {
      console.debug('[DEBUG]', ...args);
    }
  }

  info(...args) {
    if (this.levels[this.logLevel] <= this.levels.info) {
      console.info('[INFO]', ...args);
    }
  }

  warn(...args) {
    if (this.levels[this.logLevel] <= this.levels.warn) {
      console.warn('[WARN]', ...args);
    }
  }

  error(...args) {
    if (this.levels[this.logLevel] <= this.levels.error) {
      console.error('[ERROR]', ...args);
    }
  }
}

export const Logger = new LoggerClass();
```
