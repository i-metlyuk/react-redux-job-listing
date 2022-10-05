import {ADD_POSITIONS} from "./positions-consts";

export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    payload: positions
})