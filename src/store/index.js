import { configureStore } from "@reduxjs/toolkit";
import { formDataSlice } from "./formData-slice";

export const store = configureStore({
    reducer: {
        formDataReducer: formDataSlice.reducer
    }
});