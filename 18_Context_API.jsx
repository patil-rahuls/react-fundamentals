////////////////////////////////////////////////////////////////////////////////
// Context API /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// The "Theme" Example (Light vs. Dark Mode)
// This is the classic example because the "Theme" is something almost every
// component needs to know about.

////////////////////////////////////////////////////////////////////////
// Create the Context
////////////////////////////////////////////////////////////////////////
// First, we create the context and a "Provider" that holds the value.

import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context object
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 2. Wrap children in the 'Provider' and pass the
  //    state and the handler function.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

////////////////////////////////////////////////////////////////////////
// Use the Context
////////////////////////////////////////////////////////////////////////
// Now, any component—no matter how deep it is—can access the state and
// handler function  using the useContext hook.
function ThemedButton() {
  // 3. Grab the value directly from the Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

////////////////////////////////////////////////////////////////////////
// Put it all together
////////////////////////////////////////////////////////////////////////
// You wrap your main App (or just a section of it) in the Provider.
export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}

// Even if Navbar and MainContent don't use the theme,
// the buttons INSIDE them can still access it!


// When should you use it?
// User Authentication: Knowing if a user is logged in.
// Theming: Light/Dark mode.
// Localization: Changing the language of the whole app.
// Shopping Carts: Accessing the cart from any product page.


////////////////////////////////////////////////////////////////////////
// Cons of using Context API
////////////////////////////////////////////////////////////////////////
// Context makes components harder to reuse because they "expect" that
// provider to be there!

// When you use useContext(ThemeContext) inside a component, that component
// now has a dependency.
// If you try to take that component and use it in a different part of
// your app—or a completely different project—without also bringing the
// Provider, the component will likely crash or behave unexpectedly.

// How can we re-use the component which has a dependency on a context?
//  Container vs. Presentational" pattern:

// Presentational Component:
//  Make a "dumb" component that only takes props.
//  (e.g., a Button that takes a color prop).

// Container Component:
//  Make a "smart" component that reads from Context and then
//  passes that value into the "dumb" one as a prop.

// This way, if you ever need that Button in a place without Context, you
// can still use the "dumb" version!

// IMP-TIP: Use Context for "Global" settings that rarely change,
// like User Authentication or Language settings.
