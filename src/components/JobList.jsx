import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectFilteredPositions} from "../store/positions/positions-selectors";
import {addFilter} from "../store/filters/filters-actions";
import {selectAllFilters} from "../store/filters/filters-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectAllFilters);
  const positions = useSelector(state => selectFilteredPositions(state, filters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
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

export {JobList};