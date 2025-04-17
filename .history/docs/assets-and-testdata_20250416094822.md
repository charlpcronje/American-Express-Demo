# Assets and Test Data

> [Back to README](./README.html)


This document explains where to put images and test data so they're available in both development and production builds.

## Images
- Place all images in `public/images/`.
- Reference them in your code as `/images/filename.png` (with a leading slash).
- Example:
  ```jsx
  <img src="/images/banner.png" alt="Banner" />
  ```
- In CSS, use:
  ```css
  background-image: url('/images/mask.png');
  ```

## Test Data
- Place all JSON test data in `public/data/`.
- Reference it as `/data/filename.json`.
- Example fetch:
  ```js
  fetch('/data/test_data.json')
  ```

## What Gets Copied on Build
- When you run `npm run build`, everything in `public/` is copied to `build/`.
- Anything in `src/` is only bundled if imported via JS/TS.

## Troubleshooting
- If images or data are broken in production, check that the files are in the correct `public/` subfolder and referenced with a leading slash.

---

See also:
- [Build Process](./build-process.md)
- [Troubleshooting Guide](./troubleshooting.md)
- [Component Customization & Best Practices](./component-customization-and-best-practices.md)

