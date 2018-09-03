import React, { Component } from 'react';

import API from '../../API';

import { AutoComplete } from '../../components/form';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		API.get(`/ref-data/symbols`).then((resp) => {
			this.setState({
				data: resp.data.slice(1, 10).map((obj) => {
					return { value: obj.iexId, label: obj.name };
				})
			});
		});
	}

	render() {
		return (
			<div className="App-intro">
				<AutoComplete options={this.state.data} />
				{/* {this.state.data.map((obj, i) => (
					<p key={i}>
						{obj.symbol} - {obj.name}{' '}
					</p>
				))} */}
			</div>
		);
	}
}

export default Home;
