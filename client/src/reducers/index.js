import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, ADD_SMURF } from '../actions';

export const initialState = {
	smurfs: [],
	isFetching: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_START:
			return {
				isFetching: true,
				error: ''
			};
		case FETCHING_SUCCESS:
			return {
				smurfs: action.payload,
				isFetching: false,
				error: ''
			};
		case FETCHING_FAILURE:
			return {
				isFetching: false,
				error: action.payload
			};
		case ADD_SMURF:
			return null;

		default:
			return state;
	}
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
