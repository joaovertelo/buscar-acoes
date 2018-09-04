import API from '../../API';

export const GET_SYMBOLS = 'GET_SYMBOLS';
export const ON_CHANGE_SELECT = 'ON_CHANGE_SELECT';

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
	return {
		type: ON_CHANGE_SELECT,
		payload: symbol.value
	};
}
