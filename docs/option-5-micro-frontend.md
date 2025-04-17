# Option 5: Micro-Frontend Architecture with Module Federation

> [Back to Future Architecture Options](./future-architecture-options.html)

## Overview
Each dashboard/feature is a separate micro-frontend, loaded dynamically via Module Federation. Shared components are exposed as federated modules from a central library.

---

## Workflow Example
1. **Micro-Frontend Development**
   - Each team builds/deploys their own dashboard/module (React, Razor, etc.).
2. **Component Sharing**
   - Central UI library exposes components as federated modules (Webpack config).
3. **Dynamic Loading**
   - Host app loads dashboards/features as needed.
4. **Integration**
   - Shared components are consumed via dynamic imports.

---

## Example: Module Federation Config (Webpack)

```js
// In micro-frontend webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './MemberDetails': './src/components/MemberDetails',
      },
      shared: ['react', 'react-dom']
    })
  ]
};
```

## Example: Consuming a Remote Component

```js
// In host app
const MemberDetails = React.lazy(() => import('dashboard/MemberDetails'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <MemberDetails name="Jane Doe" spend={1234.56} />
    </React.Suspense>
  );
}
```

---

## Data Flow
- **Host**: Loads remote dashboards/components as needed.
- **Micro-Frontend**: Receives data as props.

---

## Pros/Cons Recap
- **Pros**: Independent deployment, scaling, versioning. Shared UI.
- **Cons**: More complex build/deployment, dependency management.

---

## When to Use
When you want to scale development across teams and dashboards.
