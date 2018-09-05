import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class Chart extends Component {
	render() {
		return this.props.data ? (
			<ResponsiveContainer minWidth={200} minHeight={200}>
				<AreaChart data={this.props.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="valor" stroke="#8884d8" fill="#8884d8" />
				</AreaChart>
			</ResponsiveContainer>
		) : (
			<div />
		);
	}
}

Chart.propTypes = {
	data: PropTypes.array
};

export default Chart;
