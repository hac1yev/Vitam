import { createSlice } from "@reduxjs/toolkit";

const intialFormDataState = {
    formDatas: {},
    selectedFormValues: {},
    solutionItems: [],
    designItems: [],
};

export const formDataSlice = createSlice({
    name: 'formDataSlice',
    initialState: intialFormDataState,
    reducers: {
        getAllFormData(state,action) {            
            state.formDatas = {
                ...action.payload
            }
        },
        addFormValues(state,action) {
            state.selectedFormValues = {
                ...action.payload
            }
        },
        getSolutionItems(state,action) {
            state.solutionItems = [
                ...state.solutionItems,
                {...action.payload}
            ]
        },
        getDesignItems(state,action) {
            state.designItems = [
                ...state.designItems,
                {...action.payload}
            ]
        },
        clearDesignAndSolutionItems(state) {
            state.solutionItems = [];
            state.designItems = [];
        }
    }
});

export const FormDataSliceActions = formDataSlice.actions;