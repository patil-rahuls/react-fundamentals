//////////////////////////////////////////////////////////////
// JSX - JavaScript XML //////////////////////////////////////
//////////////////////////////////////////////////////////////

// JSX is a 'syntax extension' for JavaScript to use HTML like
// code directly in JavaScript files.

const LearnJSX = () => {
  return (
    <>
      {/* JSX Comments */}

      {
        // Works only if the brace is on the next line
      }

      <h1>Hello World</h1> {/* This is JSX. */}
      {/* React.createElement("h1", "null", "Hello World"); */}

      {/* JS expression inside curly braces: {...} */}
      <h3>Price: { 10+30 } </h3>

      {/* Attributes in a JSX element. */}
      <h1 className="bg-primary">Price: {10+30}</h1>
      {/* This is JSX and not html, hence we used "className"
      which gets transformed to 'class' in html. */}

      {/* A child component */}
      <SomeComponent
        prop="value" // This comment is valid here
      />

    </>
  );
}
