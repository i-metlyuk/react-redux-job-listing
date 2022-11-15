import {createSlice} from "@reduxjs/toolkit";


const positionsSlice = createSlice({
    name: '@positions',
    initialState: [],
    reducers: {
        addPositions: (_, action) => action.payload
    }
});

export const {addPositions} = positionsSlice.actions;

export const positionReducer = positionsSlice.reducer;

export const selectAllPositions = (state) => state.positions;

export const selectFilteredPositions = (state, filters = []) => {
    if (filters.length === 0) return state.positions;

    return state.positions.filter((position) => {
        const positionFilters = [].concat(position.role, position.level, ...position.languages, ...position.tools);

        return filters.every((filter) => positionFilters.includes(filter));
    })
}