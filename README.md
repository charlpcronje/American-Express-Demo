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