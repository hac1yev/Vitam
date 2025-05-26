import { createSlice } from "@reduxjs/toolkit";

const initialFlowSlice ={
    smetaData: []
}

export const flowSlice = createSlice({
    name: 'flowSlice',
    initialState: initialFlowSlice,
    reducers: {
        getSmetaData(state,action) {
            // const findedIndex = state.smetaData.findIndex((item) => )
        }
    }
});

export const FlowSliceAction = flowSlice.actions;