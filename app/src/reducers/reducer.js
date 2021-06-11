import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, FETCH_SPECIES} from '../actions/actions';

const initialState = {
  species: {
      name: 'Wookie'
  },
  isFetching: false,
  error: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        isFetching: true
      })
    case(FETCH_SUCCESS):
      return({
        ...state,
        species: action.payload,
        isFetching: false
      })
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      })
    case(FETCH_SPECIES):
      return({
        ...state,
        species: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};

