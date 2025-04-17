# Option 2: XML + XSLT Component Transformation

> [Back to Future Architecture Options](./future-architecture-options.html)

## Overview
Author dashboards/pages in XML. Use XSLT to transform XML into HTML, injecting data and component tags. Components are loaded from a library server.

---

## Workflow Example
1. **XML Authoring**
   - Write dashboard layout and data as XML.
2. **XSLT Transformation**
   - Use XSLT templates to convert XML nodes into component tags.
   - Inject data as attributes or child nodes.
3. **Component Loading**
   - Pull components from a library server (CDN, etc.).
4. **Rendering**
   - Transformed HTML is rendered by browser or server.

---

## Example: XML Input

```xml
<dashboard>
  <member-details>
    <name>Jane Doe</name>
    <spend>1234.56</spend>
  </member-details>
</dashboard>
```

## Example: XSLT Template

```xslt
<xsl:template match="member-details">
  <my-dashboard-member-details
    data-props='{"Name": "<xsl:value-of select="name" />", "Spend": <xsl:value-of select="spend" />}' />
</xsl:template>
```

## Example: Resulting HTML

```html
<my-dashboard-member-details data-props='{"Name": "Jane Doe", "Spend": 1234.56}'></my-dashboard-member-details>
```

---

## Data Flow
- **XML**: Source of truth for layout and data.
- **XSLT**: Transforms XML to HTML/component tags, injects data.
- **Component**: Reads data from attributes, renders UI.

---

## Pros/Cons Recap
- **Pros**: Elegant separation, versioned templates, non-JS authoring.
- **Cons**: XSLT skill required, debugging/maintenance complexity.

---

## When to Use
When you want content/presentation separation and have XML/XSLT expertise.
