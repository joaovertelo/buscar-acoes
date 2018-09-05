import API from '../../API';

export const GET_SYMBOLS = 'GET_SYMBOLS';
export const ON_CHANGE_SELECT = 'ON_CHANGE_SELECT';
export const GET_COMPANY = 'GET_COMPANY';
export const GET_CHART = 'GET_CHART';
export const GET_QUOTE = 'GET_QUOTE';
export const CLEAR = 'CLEAR';

export function getSymbols() {
	return (dispatch) => {
		API.get(`/ref-data/symbols`).then((resp) => {
			let options = resp.data.map((obj) => {
				return { value: obj.symbol, label: obj.name };
			});

			dispatch({
				type: GET_SYMBOLS,
				payload: options
			});
		});
	};
}

export function onChangeSelect(symbol) {
	symbol = symbol.value;
	if (!symbol) {
		return { type: CLEAR };
	}
	return [
		{ type: CLEAR },
		{
			type: ON_CHANGE_SELECT,
			payload: symbol
		},
		getCompany(symbol),
		getChart(symbol),
		getQuote(symbol)
	];
}

export function getCompany(symbol) {
	return (dispatch) => {
		API.get(`/stock/${symbol}/company`).then((resp) => {
			dispatch({
				type: GET_COMPANY,
				payload: resp.data
			});
		});
	};
}

export function getChart(symbol, range = '1d') {
	return (dispatch) => {
		API.get(`/stock/${symbol}/chart/${range}`).then((resp) => {
			console.log(resp.data);
			dispatch({
				type: GET_CHART,
				payload: { data: resp.data, range }
			});
		});
	};
}

export function getQuote(symbol) {
	return (dispatch) => {
		API.get(`/stock/${symbol}/quote`).then((resp) => {
			dispatch({
				type: GET_QUOTE,
				payload: resp.data
			});
		});
	};
}
