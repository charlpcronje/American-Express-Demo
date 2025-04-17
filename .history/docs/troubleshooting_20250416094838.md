# Troubleshooting Guide

> [Back to README](./README.html)


This guide covers common issues encountered in this project, including real-world debugging steps and general React pitfalls.

## Infinite Data Fetching Loop
**Symptom:** The app repeatedly fetches the same data or images, causing an infinite loading loop.

**Causes & Fixes:**
- **Unstable useEffect dependencies:** Ensure that functions like `fetchData` are wrapped in `useCallback` so their reference doesn't change on every render.
- **Context Provider Error Handling:** Avoid wrapping your provider in a try/catch that returns just `children` on error. This can cause context consumers to break and remount the provider, causing loops.
- **Solution:** Memoize fetch functions, fix dependency arrays, and let errors surface to error boundaries.

## Logger/Debugging
- Use the central `Logger` utility. You can toggle all logs on/off by setting `LoggerClass.enabled = true/false` in the browser console.
- For maximum visibility, you can temporarily patch all Logger methods to use `console.error`.

## Broken Images in Production
**Symptom:** Images work in development but are broken after building/serving the production app.

**Causes & Fixes:**
- **File Location:** All images referenced as `/images/...` must be present in the `public/images/` directory.
- **Path Reference:** Always use absolute paths (e.g. `/images/banner.png`) in your JSX/CSS for public assets.
- **Build Process:** Only files in `public/` are copied to the build output. Files in `src/` are only bundled if imported via JavaScript.

## Other Common React Issues
- **Component Remounting:** Changing the key prop or unintentional errors in context providers can cause components to remount and lose state.
- **useEffect Pitfalls:** Always specify all dependencies. Use ESLint's exhaustive-deps rule.
- **State Updates in Loops:** Avoid calling setState in loops or in a way that triggers re-renders without a base case.

## How to Debug
1. Open the browser console.
2. Check for `[DEBUG]`, `[INFO]`, `[WARN]`, `[ERROR]` logs.
3. Use `console.log` or `Logger` liberally when hunting for the root cause.
4. Check the network tab for repeated requests or 404s.

---

For more, see the README and other docs in this folder.

---

See also:
- [Build Process](./build-process.html)
- [Assets and Test Data](./assets-and-testdata.html)
- [Component Customization & Best Practices](./component-customization-and-best-practices.html)

