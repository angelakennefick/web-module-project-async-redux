import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const FETCH_SPECIES = "FETCH_SPECIES";



export const fetchSpecies = () => {
    return (dispatch => {
        dispatch({type: FETCH_START});
    
        dispatch(fetchStart());
        axios.get('https://swapi.dev/api/species/')
          .then(resp=> {
            dispatch({type: FETCH_SUCCESS, payload:resp.data.results});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          })
    });
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (species)=> {
    return({type: FETCH_SUCCESS, payload:species});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error})
}