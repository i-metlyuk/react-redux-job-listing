import {JobPosition} from './JobPosition';
import {connect} from "react-redux";
import {selectFilteredPositions} from "../store/positions/positions-selectors";
import {addFilter} from "../store/filters/filters-actions";

const _JobList = ({positions, addFilter }) => {
  const handleAddFilter = (filter) => {
    addFilter(filter);
  }

  return (
    <div className='job-list'>
      {positions.map(position => (
        <JobPosition
            key={position.id}
            {...position}
            handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  positions: selectFilteredPositions(state, state.filters)
})

const JobList = connect(mapStateToProps, {
  addFilter
})(_JobList);

export {JobList};