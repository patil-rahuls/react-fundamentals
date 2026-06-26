## Optimization

### Memoization

Optimization tools used to prevent unnecessary re-renders of components by caching.

- "useMemo" lets you cache the result of a function/calculation between re-renders.

- "memo" - memoizes rendering of a whole functional component. Use it to wrap a component if it frequently re-renders with the same props.
   
- "useCallback" - memoizes a function definition between renders. Use it when passing a function as a prop to a child component wrapped in memo(). Without useCallback, the child will re-render every time because it sees a "new" function prop, even if the code inside hasn't changed.

### Keys _(For Rendering List items)_

### List Virtualization
Only render items visible in the view port.

### Prefetch pages
Load an anticipated page in the background when the user is idle.

### Build size
Montoring build size is also important. The build output css, js files shouldn't be too large in size as they are fetched by the browser initially to run our app.
   
- If only prop drillling needs to be solved, just use Context API instead of a 3rd party library like Redux.

- **"Brotli"** - It is highly efficient compression tool for static html, css and js assets.

- Use **".webp"** format for all images, as it is the most efficient image compression format for web.

### Lazy Loading
Delay the loading of Non-essential parts _e.g. Dashboards have lots of tabs, and there is no need to load all of them at once._

### Source-set for images

### Use Debouncing

---
