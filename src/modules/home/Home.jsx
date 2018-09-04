import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AutoComplete } from '../../components/form';

import { getSymbols, onChangeSelect } from './homeActions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.getOptions = this.getOptions.bind(this);
		this.state = {};
	}

	componentDidMount() {
		this.props.getSymbols();
	}

	getOptions(value) {
		let symbols = this.props.symbols;
		symbols = symbols
			.filter(
				(o) =>
					o.value.toUpperCase().includes(value.toUpperCase()) ||
					o.label.toUpperCase().includes(value.toUpperCase())
			)
			.slice(0, 20);

		return symbols;
	}

	render() {
		const { onChangeSelect, symbols } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<AutoComplete
							defaultOptions={symbols.slice(0, 20)}
							getOptions={this.getOptions}
							onChange={onChangeSelect}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	symbols: state.homeReducer.symbols,
	value: state.homeReducer.value
});

const mapDispatchToProps = { getSymbols, onChangeSelect };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
