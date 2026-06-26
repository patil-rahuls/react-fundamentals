## Vite Build System

1. Local Development
      
      ```
      npm run dev
      ```
      _Live preview while developing_
      
      &nbsp;

2. Create a Build
      
      ```
      npm run build
      ```
      _Creates a production build_
      
      &nbsp;

3. Create Prod Preview
      
      ```
      npm run preview
      ```
      _Starts a lightweight local server that serves the files from the `/dist` folder. It’s perfect for catching bugs that may only appear in production._
      
      &nbsp;

---

### The "npm run build"
It transforms our JSX/TSX code and all the modules into a bundle that is as fast and small as possible.

The process is known as "minification". _(The code is minified)_

Vite creates a folder named `"/dist"` _(short for distribution)_ in your project root directory.

- There is an `"index.html"` created which is the entry point.

- `"/assets"` contains your bundled JavaScript (.js), CSS (.css), and processed images or fonts.

- Aything that was in the `"/public"` folder is put into the root of `"/dist"` directory without changes/processing.

- The `"Source Map"` - When we build a React app for production the code is minified (to save space) and transpiled (to ensure browser compatibility). The result is a single, massive file of gibberish that is impossible for a human to read. A source map is a `".map"` file that tells the browser: _"This line of gibberish in the production file actually corresponds to line 42 of App.js."_ 

- We Don't upload `.map` files to the public web server.

---
&nbsp;

### Rollup

Vite uses a algo called "Rollup" which does the following when we create a build:

- **Tree Shaking**: It identifies "dead code" (functions or components you imported but never actually used) and removes them to save space.

- **Transpilation**: It converts modern JavaScript (ESNext), TypeScript, and JSX into standard JavaScript that older and modern browsers alike can understand.

- **Minification**: It strips out whitespace, comments, and renames variables to short letters _e.g. changing `const userAuthenticated = true` ---> `const a=1`_ to shrink the js file size.

- **CSS Extraction**: It gathers all the CSS from your various components and bundles them into a few highly optimized `.css` files.

- **Asset Hashing**: It adds a unique string _(a hash)_ to every filename _(e.g. main-a1b2c3.js)_ This tells browsers: _"If the name is the same, use the cached version; if the name changed, download the new one."_

---

&nbsp;

### The "/public" and the "/assets" folder?

The files in the `"/public"` folder _(in root directory)_ are not processed by vite build system and can't be imported as modules, whereas the files in `"/assets"` folder are processed by the vite build system and can be imported as modules.

> What's meant by `"processed by vite"`?
>
> It means that during the build process, Vite applies certain transformations and optimizations to your assets _(like images, fonts, etc.)_ to improve caching, performance, and cache busting.

In `"/public"` folder we usually store:
   - Favicons and icons: _favicon.ico_, _apple-touch-icon.png_, etc.
   - Robots.txt, humans.txt, and other meta files.
   - Static images, PDFs, or files that need to be accessed
   directly via URL.
   - Manifest files for PWA configurations.

They are all referenced directly in the HTML via relative paths _(e.g. /favicon.ico)_.

In `"/assets"` folder we store:
   
   - Images used in components _(logos, backgrounds, icons)_.
   - Fonts or custom font files.
   - Other media files that are imported via JavaScript code.

---

&nbsp;

### Cache Busting

Browsers cache static assets to improve performance. However, when you deploy updates, browsers might continue to use old cached `css` & `js` files, leading to issues like users not seeing the latest styles or functionalities.

### How Cache Busting Works?

Hashing Filenames: Build tools append a hash based on the file content to filenames. The main HTML file references these hashed filenames dynamically during build.

Cache Control Headers: Servers can be configured to set cache headers to cache assets for a long time, with the filename hash determining cache invalidation.

&nbsp;

In React apps _(using Create React App or similar setups)_ often use `Webpack`, which by default can generate hashed filenames for bundled assets _(e.g. main.abc123.js)_.

These hashes change whenever the content changes, prompting browsers to fetch the new files. The main HTML file _(usually index.html)_ references these hashed filenames, so cache busting happens automatically during the build process.

> Vite also supports cache busting via hashed filenames: 
> 
> When building your project (vite build), Vite also generates files with unique hashes, _like assets/index.abc123.js_. The index.html includes these hashed filenames via injected scripts and links, ensuring browsers load the latest versions.

---
