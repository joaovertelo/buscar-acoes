import { GET_SYMBOLS, ON_CHANGE_SELECT, GET_COMPANY, GET_CHART, GET_LATEST_PRICE, CLEAR } from './homeActions';

const initialState = {
	symbols: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SYMBOLS:
			return { ...state, symbols: action.payload };
		case ON_CHANGE_SELECT:
			return { ...state, value: action.payload };
		case GET_COMPANY:
			return { ...state, company: action.payload };
		case GET_CHART:
			return { ...state, chart: action.payload };
		case GET_LATEST_PRICE:
			return { ...state, latestPrice: action.payload };
		case CLEAR:
			return { symbols: state.symbols };
		default:
			return state;
	}
};
