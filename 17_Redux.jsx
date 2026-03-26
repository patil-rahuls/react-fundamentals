////////////////////////////////////////////////////////////////////////////////
// Redux ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Redux is a state management library.
// It is a tool for managing state in one central place, making it easier to
// track changes across your entire app.
// For a complex project with high frequency renders, we must use Redux.


// Slice:
// A slice is defined by three main components:
// 'name':
//    A string that identifies the slice (e.g., "cart" or "user").
// 'initialState':
//    The starting value for that piece of the store.
// 'reducers':
//    Functions that determine how the state changes in response to actions.
// 1. Create a Redux State Slice
// File: src/features/theme/themeSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducer: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light'
    }
  }
});
// These are standard exports and required
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;


// Store: (Connecting the Logic)
// The Store is the global object.
// You "register" your slice reducer here so the app knows it exists.
// 2. Create a store.
// File: app/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./src/features/theme/themeSlice";
export const store = configureStore({
    reducer: {
        theme: themeSlice // Your state will now live at "state.theme"
    }
});


// 3. 'Provide' the store to React.
// We can make it available to our React components by putting a React-Redux <Provider>
// around our application in src/index.js.
// We pass the store as a prop in the Provider.

// File: index.js (entry point)
import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';    // Store
import { Provider } from 'react-redux'; // Provider
// For everything else, we @reduxjs/toolkit.

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>,
)


// 4. The Component (Using the Logic)
// In React, you use two specific hooks to talk to the code above:
// useSelector: To read the value.
// useDispatch: To dispatch an action that changes the value.
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./src/features/theme/themeSlice";
// toggleTheme is named export, i.e. the reducer function.

export const ThemeButton = () => {
  // 1. Grab the current value from the store
  const currentTheme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleTheme)}
      className={ currentTheme === 'light' ? 'dark-btn' : 'light-btn'}
    >Change to { currentTheme === 'light' ? 'Light' : 'Dark' } Mode</button>
  );
};

// The Code Execution Flow
// Button Click:
//    You (the user) click the "ThemeButton". The onClick calls dispatch(toggleTheme()).

// Action Sent:
//    An object { type: "theme/toggleTheme" } is sent to the Store.
//    Here "theme" is nothing but the 'name' in the Slice. and
//    "toggleTheme" is the action/reducer function.

// Reducer Runs:
//    The Store finds the themeSlice reducer and runs the toggleTheme function.

// State Updates:
//    The Store's internal value changes from "light" to "dark".

// UI Updates: The useSelector hook notices the change and triggers a re-render of
// the ThemeButton component with the new colors.
