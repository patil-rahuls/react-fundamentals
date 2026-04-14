/////////////////////////////////////////////////////////////
// Redux vs Context API /////////////////////////////////////
/////////////////////////////////////////////////////////////

// When to use Redux and when to use Context API?

/*
1. Context API: The "Prop-Drilling" Fixer
    The Context API is built into React.
    It’s perfect for data that doesn’t change frequently or is
    required by many components at different nesting levels.

    When to use it:
      Low-frequency updates:
        When the data doesn't change every few seconds.

      Static global data:
        Information that is set once (or rarely) and consumed
        everywhere.

      Avoiding "Prop-Drilling":
        When you are passing a prop through 5 layers of
        components just to get it to a child.

    Real-World Examples:
      Theming:
          Switching between Light and Dark mode.

      Localization:
        Storing the user's preferred language.

      Authentication State:
        Storing the current user object and their permissions after
        they log in.


2. Redux: The "State Machine" Powerhouse
    Redux is a third-party library designed for complex state logic.
    It uses a centralized "Store" and strict rules (Actions and
    Reducers) to change data.

    When to use it:
      High-frequency updates:
        When data changes rapidly (e.g., a websocket feed).

      Complex Logic:
        When one action triggers changes in multiple, unrelated
        parts of the app.

      Traceability:
        If you need to see exactly why and when a state changed
        (using Redux DevTools).

      Large Teams:
        Redux enforces a strict pattern that makes it easier for
        20+ developers to work on the same codebase without
        breaking state logic.

    Real-World Examples:
      E-commerce Cart:
        Adding an item updates the cart total, the navbar icon, the
        inventory count, and perhaps a "recommended items" list.

      Collaborative Tools:
        A design app (like Figma) or a spreadsheet where every
        click needs to be undoable/redoable.

      Dashboard Analytics:
        Real-time financial tickers or data visualizations where
        many different components need to sync with a streaming
        data source.



Main difference is the Debugging.
  In Redux, we get a complete time travel debugging.
  Bundle size increases with Redux, whereas context API is built-in.

*/
