import {ADD_FILTER, REMOVE_ALL_FILTERS, REMOVE_FILTER} from "./filters-consts";

export const addFilter = (filter) => ({
    type: ADD_FILTER,
    payload: filter
})

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    payload: filter
})

export const removeAllFilters = () => ({
    type: REMOVE_ALL_FILTERS
})