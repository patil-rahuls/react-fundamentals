## Responding to Events

Events are written in camelCase.

```javascript
export const LearnEvent = () => {
  
  // Event handlers need to be written 
  // inside the Component definition.
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
```

_Notice the onClick function on the second button, we never call the function, only pass the function. Calling the function would result in an infinite loop error._

---
&nbsp;

## Event Bubbling

In web development, when an event _(like a click)_ happens on an element, it first runs the handlers on that specific element, then on its parent, then all the way up to the very top (the document). 

This happens only when there is a `"onClick"` event defined on each of those elements in the chain.

> Example:
> ```javascript
> <div onClick={() => console.log("Outer")}>
>   <header onClick={() => console.log("Header")}>
>     <button onClick={() => console.log("Button")}>
>       Click Me!
>     </button>
>   </header>
> </div>
> ```
> 
> _If you click the Button "Click Me", the output will be:_
>
>      "Button"
>
>      "Header"
>
>      "Outer"
> 

> Solution:
>
> We need to specify `event.stopPropagation()` in each of the element's handler function. It stops the event from traveling UP _i.e. (moving up to parents)._

#### Why does Event Bubbling even exist? (Event Delegation)

Event bubbling allows for a powerful technique called `"Event Delegation"`. 

Instead of adding an `"onClick"` to 100 different list items `<li>`, you add one listener to the parent `<ul>`. When any list item is clicked, the event bubbles up to the parent, and you can handle it there.


#### event.preventDefault()
It stops default browser behaviour/actions like:
  - Form Submission:
    
     Clicking a submit button refreshes the page.
  
  - Anchor Links `<a href="...">`:
     
     Clicking an anchor link navigates you to a new URL specified using "href"
  
  - Checkboxes:
     
     Clicking a box toggles the checkmark.

`event.preventDefault()` is used to prevent these by-default behaviours so that our JavaScript logic can be run.

---
&nbsp;

## Event Propogation

The Three Phases of Event Propagation

Its like a round trip.

When you click an element, the event actually travels in three distinct stages. _It doesn't just "appear" at the button; it travels from the root down, and then back up._

1. The Capturing Phase (The Descent)

    The event starts at the very top (window and document) and trickles down through every parent until it reaches the element you clicked. The Parent elements intercept the event before it reaches the intended target.

2. The Target Phase (The Arrival)

    The event has reached the specific element you clicked _i.e. "event.target"_. This is where the button's own click handler fires.

3. The Bubbling Phase (The Ascent)

    The event "bubbles" up from the target element, back through all the parents, until it hits the window object again.
    
    Note: This is the phase we usually care about and where "onClick" listeners in React fire by default.
  
---

