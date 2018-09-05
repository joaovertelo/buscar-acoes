import { GET_SYMBOLS, ON_CHANGE_SELECT, GET_COMPANY, GET_CHART, GET_QUOTE, CLEAR } from './homeActions';

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
			let chart = action.payload.data;
			chart = chart
				.map((o) => ({
					name: action.payload.range === '1d' ? o.label : o.date,
					valor: o.close
				}))
				.filter((o) => o.valor);

			return { ...state, chart: chart };
		case GET_QUOTE:
			return { ...state, quote: action.payload };
		case CLEAR:
			return { symbols: state.symbols };
		default:
			return state;
	}
};
