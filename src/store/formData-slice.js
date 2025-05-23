import { createSlice } from "@reduxjs/toolkit";

const intialFormDataState = {
    formDatas: {},
    selectedFormValues: {

    }
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
        }
    }
});

export const FormDataSliceActions = formDataSlice.actions;