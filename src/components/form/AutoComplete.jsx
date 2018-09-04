import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';

PropTypes.props = {
	onChange: PropTypes.func,
	loadOptions: PropTypes.func.isRequired
};

class AutoComplete extends Component {
	constructor(props) {
		super(props);

		this.state = { isLoading: false };
	}

	loadOptions = (inputValue, callback) => {
		this.setState({ isLoading: true });
		let options = this.props.getOptions(inputValue);
		callback(options);
		this.setState({ isLoading: false });
	};

	render() {
		return (
			<AsyncSelect
				cacheOptions
				defaultOptions={this.props.defaultOptions}
				loadOptions={this.loadOptions}
				onChange={this.props.onChange}
				placeholder="Selecione..."
				isLoading={this.state.isLoading}
			/>
		);
	}
}

export default AutoComplete;
