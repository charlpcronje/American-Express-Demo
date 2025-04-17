# Option 4: XMLT-Driven Web Components (No-JS Authoring)

> [Back to Future Architecture Options](./future-architecture-options.html)

## Overview
Authors use custom XML tags to describe dashboards. XMLT transforms these tags into web components at build or runtime. Components are loaded from a protected library server (CORS-restricted).

---

## Workflow Example
1. **XML Authoring**
   - Write dashboard layout using custom tags (e.g., `<dashboard-member-details>`).
2. **XMLT Transformation**
   - XMLT tool parses XML, replaces custom tags with actual web component tags.
3. **Component Loading**
   - Components loaded from a protected server (CORS, auth).
4. **Rendering**
   - Browser renders web components, JS loaded as needed.

---

## Example: XML Input

```xml
<dashboard>
  <dashboard-member-details name="Jane Doe" spend="1234.56" theme="{ &quot;primaryColor&quot;: &quot;#0050b3&quot; }" />
</dashboard>
```

## Example: XMLT Output

```html
<my-dashboard-member-details name="Jane Doe" spend="1234.56" theme='{"primaryColor":"#0050b3"}'></my-dashboard-member-details>
```

---

## Data Flow
- **XML**: Source of truth for layout/data.
- **XMLT**: Transforms tags to web components, injects data.
- **Component**: Renders UI, reads data from attributes.

---

## Pros/Cons Recap
- **Pros**: Empowers non-JS authors, secure JS delivery, central control.
- **Cons**: Custom tooling required, debugging complexity.

---

## When to Use
When you want non-JS authors to build dashboards and tightly control JS usage.
