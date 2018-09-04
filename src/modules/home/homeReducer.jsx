import { GET_SYMBOLS, ON_CHANGE_SELECT } from './homeActions';

const initialState = {
	symbols: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SYMBOLS:
			return { ...state, symbols: action.payload };
		case ON_CHANGE_SELECT:
			return { ...state, value: action.payload };
		default:
			return state;
	}
};
