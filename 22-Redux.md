## Redux 

Redux is a state management library. It is a tool for managing state in one central place, making it easier to track changes across your entire app.

For a complex project with high frequency renders, we must use Redux.


```javascript
src/
├── app/
│   ├── store.jsx           # Store configuration
├── features/
│   ├── theme/
│   │   ├── themeSlice.jsx  # The slice (actions + reducer)
├── components/
├────── ThemeButton.jsx     # Button that controls theme
├── index.jsx               # entry point
```


### Slice
A slice is defined by three main components:

- `'name'`:
   A string that identifies the slice (e.g., "cart" or "user").
- `'initialState'`:
   The starting value for that piece of the store.
- `'reducers'`:
   Functions that determine how the state changes in response to actions.

> _File: src/features/theme/themeSlice.jsx_
> ```javascript
> import { createSlice } from "@reduxjs/toolkit";
> 
> const initialState = 'light';
> 
> const themeReducer = createSlice({
>   name: 'theme', // Name of slice(not state)
>   initialState,  // This can also be an object
>   reducer: {
>     toggleTheme: (state) => {
>       // the 'state' is an internal property and is
>       // not accessible directly. So we dont call
>       // it like toggleTheme('some_value');
>       return state === 'light' ? 'dark' : 'light'
>     },
>   }
> });
> 
> export const { toggleTheme } = themeReducer.actions;
> export default themeReducer.reducer;
> ```

&nbsp;

### Store: (Connecting the Logic)

The Store is the global object. You "register" your slice reducer here so the app knows it exists.

> _File: src/app/store.js_
> ```javascript
> import { configureStore } from "@reduxjs/toolkit";
> import themeReducer from "../src/features/theme/themeSlice";
> 
> export const store = configureStore({
>   reducer: {
>     themeColor: themeReducer
>     // Your state will now live at "state.themeColor"
>   }
> });
> ```

&nbsp;

### `<Provider>`

Finally we 'Provide' the store to React.

We can make it available to our React components by putting a React-Redux `<Provider>` around our application in `src/index.js`.

We Wrap App using this Provider and pass the store as a prop in the Provider.

> _File: src/index.js (entry point)_
> ```javascript
> import React from 'react'
> import { createRoot } from 'react-dom/client';
> import './index.css';
> import App from './App';
> import { store } from './app/store';    // Store
> import { Provider } from 'react-redux'; // Provider
> 
> createRoot(document.getElementById('root')).render(
>   <Provider store={store}>
>     <App />
>   </Provider>,
> )
> ```

&nbsp;

### `useSelector` & `useDispatch`

We use `useSelector` & `useDispatch` to talk to the code above:

> _File: src/components/ThemeButton.jsx_
> ```javascript
> import { useSelector, useDispatch } from "react-redux";
> 
> import { toggleTheme } from "../src/features/theme/themeSlice";
> // toggleTheme is named export, i.e. the reducer function.
> 
> export const ThemeButton = () => {
>   const theme = useSelector((state) => state.theme);
>   // useSelector: To access the state from the store.
> 
>   const dispatch = useDispatch();
>   // useDispatch: To dispatch a reducer action that changes
>   // the state.
>   return (
>     <button
>       onClick={() => dispatch(toggleTheme())}
>       className={ theme === 'light' ? 'dark-btn' : 'light-btn'}
>     >Switch to {
>       theme === 'light'
>       ? 'Light'
>       : 'Dark'
>     } Mode</button>
>   );
> };
> ```

The Code Execution Flow - 

#### Button Click: _User clicks the "ThemeButton"._
 
It calls `toggleTheme()`, which returns an object like this:
  
```
{ type: "theme/toggleTheme", payload: undefined }
```
And that object is dispatched to the Store.

#### The Store:
 
The Store says: _"Okay, I see a toggleTheme action. I will now look up the "toggleTheme" reducer function. I'll grab the current state I'm holding in my memory and inject it as the first argument into that function."_

_Here `"theme"` is nothing but the 'name' in the Slice. and `"toggleTheme"` is the action/reducer function._

#### Reducer Runs:
The Store finds the `themeSlice` reducer and runs the `toggleTheme` function.

#### State Updates:
The Store's internal value changes from "light" to "dark".

#### UI Updates:
The `'useSelector'` hook notices the change and triggers a re-render of the `ThemeButton` component with the new colors.


The Flow:
```
      Component Dispatches
              |
      Store receives Action
              |
Store gives current State to Reducer
              |
      Reducer returns New State
              |
        Store updates.
```
