/////////////////////////////////////////////////////////////
// Component Composition ////////////////////////////////////
/////////////////////////////////////////////////////////////

// "children" is a special reserved prop name in React!
// It is used to create "container" or "wrapper" components
// that don't need to know what's inside them.

// e.g. In ecommerce, we have Cards with same shadow ,
// same colors, same border and same padding(same appearance),
// but different content inside.
// That's when we use { children } prop.
// Best example is a Modal/Popup.

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children} {/* Any content can go here */}
      </main>
    </>
  );
};

// Usage:
// Main file - App.jsx:
function App() {
  return (
    <MainLayout>
      <h1>Insurance Dashboard</h1>
    </MainLayout>
  );
}

// When you use "<h1>Insurance Dashboard</h1>" between the
// 'MainLayout' tags, React will always look for a prop
// named "children" in the 'MainLayout' component definition
// to put that content into.
