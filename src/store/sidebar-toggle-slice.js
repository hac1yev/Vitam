import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleInitialState = {
    isOpenSidebar: true
};

export const sidebarToggleSlice = createSlice({
    name: 'sidebarToggleSlice',
    initialState: sidebarToggleInitialState,
    reducers: {
        sidebarToggleAction(state,action) {
            state.isOpenSidebar = action.payload;
        }
    }
});

export const SidebarToggleSliceAction = sidebarToggleSlice.actions;