import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AutoComplete } from '../../components/form';
import Detalhes from './Detalhes';
import Chart from './Chart';

import { getSymbols, onChangeSelect } from './homeActions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.getOptions = this.getOptions.bind(this);
		this.state = {
			chart: []
		};
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
		const { onChangeSelect, symbols, company, quote, chart } = this.props;

		return (
			<div className="container">
				<div className="row mb-4">
					<div className="col-sm-12">
						<AutoComplete
							defaultOptions={symbols.slice(0, 20)}
							getOptions={this.getOptions}
							onChange={onChangeSelect}
						/>
					</div>
				</div>
				<Detalhes company={company} quote={quote} />
				<div className="row" style={{ height: 300 }}>
					<Chart data={chart} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	symbols: state.homeReducer.symbols,
	value: state.homeReducer.value,
	company: state.homeReducer.company,
	quote: state.homeReducer.quote,
	chart: state.homeReducer.chart
});

const mapDispatchToProps = { getSymbols, onChangeSelect };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
