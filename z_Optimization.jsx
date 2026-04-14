/////////////////////////////////////////////////////////////
// Optimization /////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// 1. Memoization
//    Optimization tools used to prevent unnecessary
//      re-renders of components by caching.
//    "useMemo" lets you cache the result of a function /
//      calculation between re-renders.
//    "memo" - memoizes rendering of a whole functional
//      component.
//      Use memo() to wrap a component if it frequently
//      re-renders with the same props.
//    "useCallback" - memoizes a function definition between
//      renders.
//      Use "useCallback" when passing a function as a prop
//      to a child component wrapped in memo(). Without
//      useCallback, the child will re-render every time
//      because it sees a "new" function prop, even if the
//      code inside hasn't changed.


// 2. Virtualization

// 3. Prefetch

// 4. Build size
//    Montoring build size is also important. The build output
//    css, js files shouldn't be too large in size as they are
//    fetched by the browser initially to run our app.
//    If only prop drillling needs to be solved, just use
//    Context API instead of a 3rd party library like Redux.

//    "Brotli" - It is highly efficient compression tool for
//    static html, css and js assets.

//    Use ".webp" format for all images, as it is the most
//    efficient image compression format for web.


// 4. source-set for images
