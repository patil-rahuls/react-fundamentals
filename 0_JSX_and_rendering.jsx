////////////////////////////////////////////////////////////////////////////////
// JSX - JavaScript XML ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// JSX is a 'syntax extension' for JavaScript to use HTML like code directly in
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
// 'class' in html.



////////////////////////////////////////////////////////////////////////////////
// Rendering ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////////////////
// Initial Rendering:
// Initial Rendering is when your app starts up.
// The very first time the UI is built using a 'blueprint' based on our code
// before any state is manipulated or before any action is taken by user.
//


///////////////////////////
// // Re-rendering:
// If something changes—like a user clicks a button or data arrives from the
// internet, React re-runs the "script" only for that particular component to
// see if the UI needs to look different.

// Important Note: React is "smart." It compares the new 'blueprint' with the
// old one and only changes the tiny parts of the actual screen that actually
// changed. This is why React feels so fast.


///////////////////////////
// Mounting:
// Mounting is the process of a component being created and inserted into the
// webpage for the first time.

// What happens? React sets up the component's initial "state" (their memory)
// and puts the actual HTML elements into the browser's view.

// Common Use Case: This is usually when you might "start" something, like
// fetching data from a server or starting a timer.


///////////////////////////
// Unmounting:
// It’s when a component is removed from the webpage.

// What happens? The component is destroyed. Its HTML is scrubbed from the
// browser, and its "memory" is cleared out.

// Common Use Case: This is the "cleanup" phase. If you started a timer when
// the component mounted, you need to stop it now so it doesn't keep running
// in the background.

///////////////////////////
// A react hook called "useEffect" can be used to perform actions(Use Case) on
// a component mount and unmount.
///////////////////////////
