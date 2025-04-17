# Option 6: Server-Driven UI via JSON Schema

> [Back to Future Architecture Options](./future-architecture-options.html)

## Overview
Dashboards are described as JSON schemas specifying layout, components, theming, and data sources. A universal renderer reads the schema and renders the UI.

---

## Workflow Example
1. **Schema Authoring**
   - Define dashboard structure as a JSON schema.
2. **Renderer Implementation**
   - Build a universal renderer (React, web components, or Razor helper) that reads schema and renders components.
3. **Data Binding**
   - Data sources are referenced in the schema and injected at render time.

---

## Example: JSON Schema

```json
{
  "type": "dashboard",
  "children": [
    {
      "type": "MemberDetails",
      "props": {
        "name": "Jane Doe",
        "spend": 1234.56,
        "theme": { "primaryColor": "#0050b3" }
      }
    }
  ]
}
```

## Example: Renderer (React)

```js
function renderComponent(node) {
  switch(node.type) {
    case 'MemberDetails':
      return <MemberDetails {...node.props} />;
    // ...other components
  }
}

function DashboardRenderer({ schema }) {
  return (
    <div>
      {schema.children.map(renderComponent)}
    </div>
  );
}
```

---

## Data Flow
- **Schema**: Defines layout, component types, props, and data sources.
- **Renderer**: Reads schema, renders UI.

---

## Pros/Cons Recap
- **Pros**: Flexible, decoupled, empowers non-devs, easy automation.
- **Cons**: Requires schema renderer, may limit custom UI/UX.

---

## When to Use
When you want to automate dashboard creation or empower non-devs.
