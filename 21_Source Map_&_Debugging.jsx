/////////////////////////////////////////////////////////////
// Source Map & Debugging ///////////////////////////////////
/////////////////////////////////////////////////////////////

// Source Map
//  When we build a React app for production the code is
//  minified (to save space) and transpiled (to ensure browser
//  compatibility).
//  The result is a single, massive file of gibberish that is
//  impossible for a human to read.

// A source map is a ".map" file that tells the browser:
// "This line of gibberish in the production file actually
// corresponds to line 42 of App.js."

// We Don't upload .map files to the public web server, as it
// will reveal our entire source code to anyone who know how
// to open DevTools.

// Significance:
// Without source maps, if your app crashes in production,
// the console might say:
//  'Error at a.js:1:5432'. That tells you nothing.
// But with a source map, that same error will point you
// directly to 'UserComponent.js:line 15'.

// It allows you to use the Debugger and set breakpoints in your
// original code even though the browser is technically running
// the "ugly" version.

// At the very bottom of your minified .js file, there is a
// special comment:
//  # sourceMappingURL=main.bf32a.js.map
// The browser sees this comment and automatically tries to
// download the .map file only when the DevTools (Inspect
// Element) are open.

// Sentry - is a Monitoring tool(server) for React app.
// Sentry uses source maps. When your app crashes on a
// user's computer, these services "consume" your source map to
// send you a readable stack trace in your dashboard instead of
// minified nonsense.

// Under 'Sources' tab, we can see the entire folder structure
// as it existed during development.
// For React apps, it is usually seen under "webpack://" folder.
// Under webpack:// we see "./" folder and inside it we see:
//    src/     // original source code.
//    node_modules/
//    webpack/ // internal helpers used by webpack bundler.




// Debugging issue in Production:
// 1. Generate the maps during the build but don't upload them to
// the public web server.
// 2. Restricting source map access only to internal IPs on prod.
// 3. Best way:- Use Sentry and upload the source map directly to
// its server during the CI/CD build; When an error happens,
// Sentry uses the map to show you the clean code in their private
// dashboard, but the public user sees nothing.





// React Dev Tools
// Redux
