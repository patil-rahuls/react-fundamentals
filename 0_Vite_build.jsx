//////////////////////////////////////////////////////////////
// Vite Build System /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Flow:
// 1. Local Development
      "npm run dev" // Live preview while developing
// 2. Create a Build
      "npm run build" // creates a production build
// 3. Create Prod Preview
      "npm run preview"
      // starts a lightweight local server that serves the files
      // from the /dist folder. It’s perfect for catching bugs
      // that may only appear in production.

//////////////////////////////////////////////////////////////
// When your code is ready, we hit:
"npm run build"
// It transforms our JSX/TSX code and all the modules into a
// bundle that is as fast and small as possible.

// Also known as "minification". 'The code is minified'.

// Vite creates a folder named "/dist" (short for distribution)
// in your project root directory.
//   1. There is a "index.html" created which is the
//      entry point.
//   2. "/assets" contains your bundled JavaScript (.js),
//      CSS (.css), and processed images or fonts.
//   3. Aything that was in public folder is put into the
//      root of "/dist" directory without changes/processing.
//   4. "Source Map"
//      When we build a React app for production the code is
//      minified (to save space) and transpiled (to ensure
//      browser compatibility).
//      The result is a single, massive file of gibberish that
//      is impossible for a human to read.
//      A source map is a ".map" file that tells the browser:
//      "This line of gibberish in the production file actually
//      corresponds to line 42 of App.js."
//      We Don't upload .map files to the public web server.

// A source map is a ".map" file that tells the browser:
// "This line of gibberish in the production file actually
// corresponds to line 42 of App.js."



//////////////////////////////////////////////////////////////
// Vite uses a algo called "Rollup" which does the following
// when we create a build:

// Tree Shaking:
// It identifies "dead code" (functions or components you
// imported but never actually used) and removes them to save
// space.

// Transpilation:
// It converts modern JavaScript (ESNext), TypeScript, and JSX
// into standard JavaScript that older and modern browsers alike
// can understand.

// Minification:
// It strips out whitespace, comments, and renames variables to
// short letters e.g. changing
// const userAuthenticated = true ---> const a=1 to shrink the
// file size.

// CSS Extraction:
// It gathers all the CSS from your various components and
// bundles them into a few highly optimized .css files.

// Asset Hashing:
// It adds a unique string (a hash) to every filename
// (e.g., main-a1b2c3.js)
// This tells browsers: "If the name is the same, use the cached
// version; if the name changed, download the new one."



//////////////////////////////////////////////////////////////
// The "public" and the "assets" folder?
// The files in the "public" folder(in root directory) are not
// processed by vite build system and can't be imported as
// modules, whereas the files in "assets" folder are processed
// by the vite build system and can be imported as modules.

// In "public" folder we usually store:
//    Favicons and icons: favicon.ico, apple-touch-icon.png....
//    Robots.txt, humans.txt, and other meta files.
//    Static images, PDFs, or files that need to be accessed
//    directly via URL.
//    Manifest files for PWA configurations.
// They are all referenced directly in the HTML via relative
// paths (e.g., /favicon.ico).

// In "assets" folder we store:
//    Images used in components (logos, backgrounds, icons).
//    Fonts or custom font files.
//    Other media files that are imported via JavaScript code.



// What's meant by "processed by vite"?
// It means that during the build process, Vite applies certain
// transformations and optimizations to your assets (like
// images, fonts, etc.) to improve caching, performance, and
// cache busting.


//////////////////////////////////////////////////////////////
// Cache Busting:
// Browsers cache static assets to improve performance. However,
// when you deploy updates, browsers might continue to use old
// cached files, leading to issues like users not seeing the
// latest styles or functionalities.


// Cache Busting in React and Vite

// In React (using Create React App or similar setups)
// React apps often use Webpack, which by default can generate
// hashed filenames for bundled assets (e.g., main.abc123.js).
// These hashes change whenever the content changes, prompting
// browsers to fetch the new files.
// The main HTML file (usually index.html) references these
// hashed filenames, so cache busting happens automatically
// during the build process.

// In Vite
// Vite also supports cache busting via hashed filenames:
// When building your project (vite build), Vite also generates
// files with unique hashes, like assets/index.abc123.js.
// The index.html includes these hashed filenames via injected
// scripts and links, ensuring browsers load the latest versions.


// How Cache Busting Works
// Hashing Filenames: Build tools append a hash based on the
// file content to filenames.
// HTML References: The main HTML file references these hashed
// filenames dynamically during build.

// Cache Control Headers: Servers can be configured to set cache
// headers to cache assets for a long time, with the filename
// hash determining cache invalidation.
