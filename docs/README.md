# American Express Reports Dashboard

## Project Purpose & Demo Context

This project is a demonstration of how to convert interactive dashboards to React using a reusable, component-based approach. The goal is to provide your team with a foundation for building future dashboards and to teach best practices for scalable, maintainable React apps.

- **Client context:** This is a demo for your team to evaluate, comment on, and help define requirements for future dashboard components and data integration.
- **Component library vision:** All components are designed to be reusable and composable, so you can build a library for future dashboards.

## Architecture Overview

The dashboard uses React and the Context API for global state management (theming, data, etc). Components are modular and easy to reuse in other projects.

- **DataContext:** Centralizes data fetching and state.
- **ThemeContext:** Manages theming and color schemes.
- **Logger:** Centralized logging for debugging and troubleshooting.

## Core Components

### Context Providers

#### ThemeContext

The `ThemeContext` provides theming capabilities throughout the application. It includes:

- `ThemeProvider`: A component that wraps the application and provides theme values
- `useTheme`: A custom hook for consuming theme values
- Theme customization via CSS variables

**Usage Example:**

```jsx
// App.js
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider initialTheme={{ primaryColor: '#ff0000' }}>
      {/* App content */}
    </ThemeProvider>
  );
}

// In a component
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  // Access theme properties
  return <div style={{ backgroundColor: theme.primaryColor }}>Content</div>;
}
```

#### DataContext

The `DataContext` manages data loading and sharing throughout the application:

- `DataProvider`: A component that wraps the application and provides data
- `useData`: A custom hook for consuming data
- Data fetching and error handling

**Usage Example:**

```jsx
// App.js
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider initialData={initialData} dataUrl="/api/data.json">
      {/* App content */}
    </DataProvider>
  );
}

// In a component
import { useData } from './context/DataContext';

function MyComponent() {
  const { data, isLoading, error } = useData();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return <div>{data.clientName}</div>;
}
```

### Main Pages

The application includes several main page components:

1. **Intro**: Landing page with summary cards and navigation to reports
2. **MonthlySpendAnalysis**: Monthly spending trends with year-to-year comparison
3. **MonthlySupplierCategoryAnalysis**: Breakdown of spending by supplier category
4. **MonthlySupplierAnalysis**: Detailed supplier transaction table

Each page component accepts customization props:

- `customStyles`: Object for styling customization
- Component-specific props (e.g., `chartOptions`, `tableOptions`)

### UI Components

#### MemberDetails

Displays card member information.

```jsx
<MemberDetails 
  customStyles={{
    container: { gap: '30px' },
    cardMemberName: { color: '#ff0000' }
  }} 
/>
```

#### Header

Displays the application header with logo.

```jsx
<Header 
  logoSrc="/path/to/logo.png"
  logoAlt="Company Logo"
  logoWidth={200}
  logoHeight={50}
  customStyles={{ header: { marginBottom: '30px' } }}
/>
```

#### Footer

Displays the application footer with links and disclaimer.

```jsx
<Footer 
  links={{
    privacy: "https://example.com/privacy",
    contactUs: "https://example.com/contact",
    facebook: "https://facebook.com/example"
  }}
  sloganImage="/path/to/slogan.png"
  facebookImage="/path/to/facebook-icon.png"
  onLinkClick={(linkName, event) => trackClick(linkName)}
  customStyles={{ footer: { backgroundColor: '#f0f0f0' } }}
/>
```

#### Navigation

Provides navigation links.

```jsx
<Navigation 
  isVisible={true}
  links={[
    { to: '/dashboard', text: 'Dashboard' },
    { to: '/reports', text: 'Reports' }
  ]}
  customStyles={{ navigation: { width: '250px' } }}
/>
```

#### LoadingSpinner

Displays a loading indicator.

```jsx
<LoadingSpinner message="Loading data..." />
```

#### ErrorMessage

Displays error messages.

```jsx
<ErrorMessage 
  message="Failed to load data" 
  retry={() => fetchData()} 
/>
```

#### BackToTopButton

Provides buttons to navigate home and scroll to top.

```jsx
<BackToTopButton 
  showHomeButton={true}
  homeText="Home"
  backToTopText="Back to Top"
  customStyles={{ button: { backgroundColor: '#ff0000' } }}
/>
```

## Utility Classes

### Logger

The `Logger` utility provides logging functionality with different log levels.

```jsx
import { Logger } from './utils/Logger';

// Usage
Logger.info('Information message');
Logger.error('Error message:', error);
Logger.debug('Debug message');
Logger.warn('Warning message');

// Set log level
Logger.setLogLevel('error'); // Only show error messages
```

### ChartUtils

The `ChartUtils` utility provides functions for chart data processing and CSV generation.

```jsx
import { ChartUtils } from './utils/ChartUtils';

// Process data for charts
const chartData = ChartUtils.processMonthlySpendData(data);
const categoryData = ChartUtils.processCategoryData(data);

// Generate and download CSV
const csvContent = ChartUtils.generateCSV(tableData, headers);
ChartUtils.downloadCSV(csvContent, 'filename.csv');
```

## Customization Guide

### Theming

You can customize the theme by providing an `initialTheme` object to the `App` component:

```jsx