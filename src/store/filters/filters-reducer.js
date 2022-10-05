import {ADD_FILTER, REMOVE_ALL_FILTERS, REMOVE_FILTER} from "./filters-consts";

export const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            if (!state.includes(action.payload)) {
                return [...state, action.payload];
            } else {
                return state
            }
        }
        case REMOVE_FILTER: {
            return state.filter((filter) => filter !== action.payload);
        }
        case REMOVE_ALL_FILTERS: {
            return [];
        }
        default: {
            return state;
        }
    }
}