import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: '@filter',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload)
            }
        },
        removeFilter: (state, action) => {
            return state.filter(item => item !== action.payload);
        },
        removeAllFilters: () => []
    }
});

export const {addFilter, removeFilter, removeAllFilters} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectAllFilters = (state) => state.filters;