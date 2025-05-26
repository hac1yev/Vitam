import { configureStore } from "@reduxjs/toolkit";
import { formDataSlice } from "./formData-slice";
import { sidebarToggleSlice } from "./sidebar-toggle-slice";
import { flowSlice } from "./flow-slice";

export const store = configureStore({
    reducer: {
        formDataReducer: formDataSlice.reducer,
        sidebarToggleReducer: sidebarToggleSlice.reducer,
        flowSliceReducer: flowSlice.reducer,    
    }
});