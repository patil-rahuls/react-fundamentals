//////////////////////////////////////////////////////////////
// Responding to Events //////////////////////////////////////
//////////////////////////////////////////////////////////////

// Events are written in camelCase.

export const LearnEvent = () => {
  // Event handlers need to be written inside the Component
  // definition.
  const handleClick1 = (e) => {
    e.preventDefault();
    console.log('1st btn clicked');
  };
  const handleClick2 = (str) => {
    console.log(str);
  };
  return (
    <>
      {/* 1. Event handler without argument */}
      <button onClick={handleClick1}> Click Me</button>

      {/* 2. Event handler with argument */}
      <button onClick={
        (e) => {
          e.preventDefault();
          handleClick2("Subscribe Me")
          }
        }> Click Me</button>
    </>
  );
};

// Notice on lines 19 & 22, we never call the function, only
// pass the function. Calling the function would result in an
// infinite loop error.


//////////////////////////////////////////////////////////////
// Event Bubbling ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// In web development, when an event (like a click) happens
// on an element, it first runs the handlers on that specific
// element, then on its parent, then all the way up to the
// very top (the document). This happens only when there is
// a "onClick" event defined on each of those elements in the
// chain.

// Example:
<div onClick={() => console.log("Outer Div Clicked")}>
  <header onClick={() => console.log("Header Clicked")}>
    <button onClick={() => console.log("Button Clicked")}>
      Click Me!
    </button>
  </header>
</div>

// If you click the Button "Click Me", the output will be:
//      "Button Clicked"
//      "Header Clicked"
//      "Outer Div Clicked"

// Solution:
event.stopPropagation()
// We need to specify event.stopPropagation() in each of
// the element's handler function.
// It stops the event from traveling UP i.e.
// (moving up to parents).

// Why does it exit? (Event Delegation)
// Event bubbling allows for a powerful technique called
// "Event Delegation"
// Instead of adding an "onClick" to 100 different list
// items "<li>", you add one listener to the parent "<ul>".
// When any list item is clicked, the event bubbles up to
// the parent, and you can handle it there.


// Then we also have event.preventDefault()
// It stops default browser behaviour/actions like:
//   Form Submission:
//      Clicking a submit button refreshes
//      the page.
//   Anchor Links <a href="...">:
//      Clicking a link navigates you to a new URL
//      specified using "href"
//   Checkboxes:
//      Clicking a box toggles the checkmark.


//////////////////////////////////////////////////////////////
// Event Propogation /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// The Three Phases of Event Propagation

// Its like a round trip.

// When you click an element, the event actually travels in
// three distinct stages. It doesn't just "appear" at the
// button; it travels from the root down, and then back up.

// 1. The Capturing Phase (The Descent)
// The event starts at the very top (window and document) and
// trickles down through every parent until it reaches the
// element you clicked. The Parent elements intercept the
// event before it reaches the intended target.

// 2. The Target Phase (The Arrival)
// The event has reached the specific element you clicked
// i.e. "event.target"
// This is where the button's own click handler fires.

// 3. The Bubbling Phase (The Ascent)
// The event "bubbles" up from the target element, back
// through all the parents, until it hits the window object
// again.
// Note: This is the phase we usually care about and where
// "onClick" listeners in React fire by default.
