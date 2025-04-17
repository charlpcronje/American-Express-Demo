# Customization Guide

> [Back to README](./README.html)

This guide provides practical instructions and examples for customizing the look, feel, and behavior of the American Express Reports Dashboard. It covers theming, component-level customization, and advanced extension techniques.

---

## Theming

The dashboard supports both light and dark themes using a flexible theme context. You can set a custom color scheme globally or override it per component.

### Setting a Global Theme

Wrap your app in the `ThemeProvider` and pass an `initialTheme` object:

```jsx
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider initialTheme={{
      primaryColor: '#0050b3',
      cardBackground: '#f5f7fa',
      textColor: '#222',
      borderColor: '#eaeaea',
      buttonColor: '#0050b3',
      buttonTextColor: '#fff',
      linkColor: '#1f6feb',
      mode: 'light' // or 'dark'
    }}>
      {/* App content */}
    </ThemeProvider>
  );
}
```

### Using Theme in Components

Access the theme in any component using the `useTheme` hook:

```jsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return (
    <div style={{ backgroundColor: theme.cardBackground, color: theme.textColor }}>
      <button onClick={toggleTheme} style={{ background: theme.buttonColor, color: theme.buttonTextColor }}>
        Toggle Theme
      </button>
    </div>
  );
}
```

---

## Customizing Components

All reusable components accept props to override styles and content. The most common prop is `customStyles`, which lets you override specific style objects.

### Example: Header

```jsx
<Header
  logoSrc="/images/custom-logo.png"
  customStyles={{
    header: { backgroundColor: '#212a3a', borderBottom: '2px solid #0050b3' },
    logo: { filter: 'grayscale(100%)' }
  }}
/>
```

### Example: Navigation

```jsx
<Navigation
  isVisible={true}
  links={[
    { to: '/dashboard', text: 'Dashboard' },
    { to: '/reports', text: 'Reports' }
  ]}
  customStyles={{
    navigation: { width: '260px', background: '#0050b3' },
    link: { color: '#fff' },
    activeLink: { color: '#ffd700' }
  }}
/>
```

### Example: MemberDetails

```jsx
<MemberDetails
  customStyles={{
    container: { gap: '40px' },
    cardMemberName: { color: '#0050b3', fontSize: '1.5em' }
  }}
/>
```

---

## Advanced Customization

- **Component Props:** Many components accept additional props for data, event handlers, or rendering options. See the main README or component docs for details.
- **Render Props/Slots:** For advanced use, you can extend components to accept `children` or render props for custom layouts.
- **Theme Overrides:** You can override the theme context at any subtree by nesting another `ThemeProvider`.

---

## Tips & Best Practices

- Use the `customStyles` prop for quick style tweaks.
- Use the theme context for consistent branding and dark/light mode support.
- Pass data and links via props to keep components reusable and decoupled.
- For complex composition, consider creating wrapper components or extending via render props.

---

## See Also
- [Component Customization & Best Practices](./component-customization-and-best-practices.html)
- [Assets and Test Data](./assets-and-testdata.html)
- [Build Process](./build-process.html)
- [Troubleshooting Guide](./troubleshooting.html)
