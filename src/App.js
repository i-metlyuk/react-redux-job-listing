import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {FilterPanel} from 'components/FilterPanel';
import {JobList} from 'components/JobList';
import {TheHeader} from 'components/TheHeader';
import {addPositions} from "./store/positions/position-actions";
import {ADD_POSITIONS} from "./store/positions/positions-consts";
import data from "./mock/data.json";

function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(addPositions(data))
    }, [])

    return (
        <>
            <TheHeader/>
            <div className='container'>
                <FilterPanel/>
                <JobList/>
            </div>
        </>
    );
}

export default App;
