////////////////////////////////////////////////////////////////////////////////
// JSX - JavaScript XML ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Its a syntax extension for JavaScript to use HTML like code directly in 
// JavaScript files.
const LearnJSX = () => {
    return (
        <>
            {/* React.createElement("h1", "null", "Hello World"); */}
            <h1>Hello World</h1> {/* This is JSX. */}

            {/* And this is a JSX comment. */}

        </>
    );
}

// We can write any JavaScript expression inside the JSX using curly braces: {}
return (
    <>
        <h1>Price: {10+30}</h1>
    </>
);

// Attributes 
// We can write any attributes in a JSX element.
return (
    <>
        <h1 className="bg-primary">Price: {10+30}</h1> 
    </>
);

// This is JSX and not html, hence we used "className" which gets transformed to 
// html 'class'
