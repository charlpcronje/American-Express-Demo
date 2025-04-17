# Option 1: Online Component Library with Theming API

> [Back to Future Architecture Options](./future-architecture-options.html)

## Overview
Host UI components in an online library (npm, CDN, or private server). Razor templates reference these components, passing theming and configuration as props/attributes. Components are presentational only—no business logic inside.

---

## Workflow Example
1. **Component Development**
   - Build React or Web Components in a library repo.
   - Export as npm package or host on CDN/private server.
2. **Publishing**
   - Version and publish the library.
   - Document available components and props.
3. **Integration in Razor**
   - Reference components using `<script>` or import statements.
   - Use Razor helpers to insert component tags with data/theming props.
4. **Theming & Data Passing**
   - Pass theme and data as JSON props or data-attributes.
   - All business logic/data fetching stays in Razor/backend.

---

## Example: Razor Template Using Online Component

```cshtml
@{
    var userData = new {
        Name = "Jane Doe",
        Spend = 1234.56
    };
    var theme = new {
        primaryColor = "#0050b3",
        mode = "dark"
    };
}

<!-- Load component library from CDN -->
<script src="https://cdn.example.com/components/latest/bundle.js"></script>

<!-- Use custom element with data passed as JSON -->
<my-dashboard-member-details
    data-props='@Html.Raw(Json.Serialize(userData))'
    data-theme='@Html.Raw(Json.Serialize(theme))'>
</my-dashboard-member-details>
```

---

## Example: Component Implementation (Web Component)

```js
class MemberDetails extends HTMLElement {
  connectedCallback() {
    const props = JSON.parse(this.getAttribute('data-props'));
    const theme = JSON.parse(this.getAttribute('data-theme'));
    this.innerHTML = `
      <div style="color: ${theme.primaryColor};">
        <h2>${props.Name}</h2>
        <p>Spend: $${props.Spend}</p>
      </div>
    `;
  }
}
customElements.define('my-dashboard-member-details', MemberDetails);
```

---

## Data Flow
- **Razor**: Fetches/prepares data, serializes to JSON, injects as attributes.
- **Component**: Purely presentational, reads data/theme from attributes.

---

## Pros/Cons Recap
- **Pros**: Centralized, versioned, reusable, easy theming, no business logic in UI.
- **Cons**: Requires careful versioning, some Razor/JS integration work.

---

## When to Use
When you want a single source of truth for UI and maximum reusability across projects.
