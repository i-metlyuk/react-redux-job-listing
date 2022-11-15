import {useSelector} from "react-redux";

import {selectFilteredPositions} from "./positions-slice";
import {selectAllFilters} from "../filter/filter-slice";


export const usePositions = () => {
    const filters = useSelector(selectAllFilters);
    const positions = useSelector(state => selectFilteredPositions(state, filters));

    return positions;
}