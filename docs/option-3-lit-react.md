# Option 3: Web Components via LitElement + React Wrappers

> [Back to Future Architecture Options](./future-architecture-options.html)

## Overview
Build core UI as Web Components using LitElement. Publish as a library. Use React wrappers for reactivity and integration. Razor templates reference web components as custom tags.

---

## Workflow Example
1. **Component Development**
   - Build components using LitElement.
   - Export as web components (custom elements).
2. **Publishing**
   - Publish to npm/CDN/private server.
3. **React Integration**
   - Write React wrappers for each component for prop/event mapping.
4. **Razor Integration**
   - Reference web components as custom HTML tags in Razor.

---

## Example: LitElement Component

```js
import { LitElement, html, css } from 'lit';

class MemberDetails extends LitElement {
  static properties = {
    name: { type: String },
    spend: { type: Number },
    theme: { type: Object }
  };
  render() {
    return html`
      <div style="color: ${this.theme.primaryColor};">
        <h2>${this.name}</h2>
        <p>Spend: $${this.spend}</p>
      </div>
    `;
  }
}
customElements.define('my-dashboard-member-details', MemberDetails);
```

## Example: React Wrapper

```jsx
import React, { useRef, useEffect } from 'react';

export function MemberDetailsWrapper({ name, spend, theme }) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.name = name;
      ref.current.spend = spend;
      ref.current.theme = theme;
    }
  }, [name, spend, theme]);
  return <my-dashboard-member-details ref={ref} />;
}
```

## Example: Razor Usage

```html
<my-dashboard-member-details name="Jane Doe" spend="1234.56" theme='{"primaryColor":"#0050b3"}'></my-dashboard-member-details>
```

---

## Data Flow
- **Razor**: Passes data as attributes or JSON.
- **React**: Wrapper syncs props to web component.
- **Web Component**: Renders UI, no business logic.

---

## Pros/Cons Recap
- **Pros**: Framework-agnostic, reusable, easy integration.
- **Cons**: More complex build/testing, React <-> Web Component edge cases.

---

## When to Use
When you want maximum flexibility and cross-framework support.
