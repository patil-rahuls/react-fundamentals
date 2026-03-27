import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val: 'white'
};
const themeReducer = createSlice({
    name: 'theme',
    initialState, // Whatever we provide here is what the State will look like.
    reducers: {
        themeToggle: (state) => {
            return state.val === 'white' ? 'brown' : 'white';
            // Since the state is an Object we can also simply update
            // the state here and it will work. i.e.
            // state.val = state.val === 'white' ? 'brown' : 'white';
            // Redux Toolkit uses a library called Immer.
            // This allows you to "mutate" the state directly ONLY if the
            // state is an Object(and obviously Array).

            // For primitives, it wont update/mutate.
            // ✅ CORRECT (Must return for primitives)
            // toggleTheme: (state) => {
            //     return state === 'light' ? 'dark' : 'light';
            // }
            // ❌ WRONG (This does nothing)
            // toggleTheme: (state) => {
            //     state = state === 'light' ? 'dark' : 'light';
            // }
        },
        // reducer function with parameter
        setSpecificTheme: (state, action) => {
            return action.payload;
            // action.payload can be 'blue' or 'green'
        }
        // In these reducer functions' definitions, the params
        // 'state' and 'action' these are internal properties
        // accessible only to redux.
        // We can only pass a parameter to "setSpecificTheme"
        // because it is intended to accept an 'outside' param.
        // 'state' points to the current state value and this is handled
        // automatically by redux.
    }
});

export const { themeToggle, setSpecificTheme }  = themeReducer.actions;
export default themeReducer.reducer;
