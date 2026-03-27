import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        themeColor: themeReducer
        // "state.themeColor" would become our state Object.
        // This will be used in App.jsx using useSelector()
    }
});
