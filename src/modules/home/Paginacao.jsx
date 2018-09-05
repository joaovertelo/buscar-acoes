import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col } from '../../common';
import { getChart } from './homeActions';

class Paginacao extends Component {
	render() {
		const { symbol } = this.props;
		return (
			<Row>
				<Col>
					<nav>
						<ul className="pagination">
							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '1d')} className="page-link">
									1d
								</button>
							</li>
							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '1m')} className="page-link">
									1m
								</button>
							</li>
							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '3m')} className="page-link">
									3m
								</button>
							</li>
							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '6m')} className="page-link">
									6m
								</button>
							</li>

							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '1y')} className="page-link">
									1a
								</button>
							</li>

							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '2y')} className="page-link">
									2a
								</button>
							</li>

							<li className="page-item">
								<button onClick={() => this.props.getChart(symbol, '5y')} className="page-link">
									5a
								</button>
							</li>
						</ul>
					</nav>
				</Col>
			</Row>
		);
	}
}

Paginacao.propTypes = {
	symbol: PropTypes.string
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getChart };

export default connect(mapStateToProps, mapDispatchToProps)(Paginacao);
