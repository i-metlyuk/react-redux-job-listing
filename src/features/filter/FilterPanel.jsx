import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";

import {removeFilter, removeAllFilters, selectAllFilters} from "./filter-slice";


const FilterPanel = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectAllFilters);

    if (filters.length === 0) {
        return <></>
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {
                        filters.map((filter) => (
                            <Badge
                                key={filter}
                                variant="clearable"
                                onClear={()=> dispatch(removeFilter(filter))}
                            >
                                {filter}
                            </Badge>
                        ))
                    }
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(removeAllFilters())}
                >
                    Clear
                </button>
            </div>
        </Card>
    )
}

export {FilterPanel};