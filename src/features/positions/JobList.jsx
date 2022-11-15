import {useDispatch} from "react-redux";

import {usePositions} from "./usePositions";
import {useFetchPositions} from "./useFetchPositions";
import {addFilter} from "../filter/filter-slice";
import {JobPosition} from "./JobPosition";

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();
  const dispatch = useDispatch();

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