import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {connect} from "react-redux";
import {selectAllFilters} from "../store/filters/filters-selectors";
import {removeAllFilters, removeFilter} from "../store/filters/filters-actions";

const _FilterPanel = ({filters, removeFilter, removeAllFilters}) => {
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
                                onClear={()=> removeFilter(filter)}
                            >
                                {filter}
                            </Badge>
                        ))
                    }
                </Stack>

                <button
                    className='link'
                    onClick={() => removeAllFilters()}
                >
                    Clear
                </button>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    filters: selectAllFilters(state)
})

const FilterPanel = connect(mapStateToProps, {
    removeFilter,
    removeAllFilters
})(_FilterPanel);

export {FilterPanel};