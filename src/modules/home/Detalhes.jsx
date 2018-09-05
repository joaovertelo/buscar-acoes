import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Row, Col } from '../../common';

class Detalhes extends Component {
	render() {
		const { company, quote } = this.props;
		return (
			<div>
				{company &&
				quote && (
					<div className="mt-4">
						<Row>
							<Col>
								<FormGroup>
									<ControlLabel className="font-weight-bold">
										{company.companyName} ({company.symbol})
									</ControlLabel>
								</FormGroup>
							</Col>

							<Col>
								<FormGroup>
									<ControlLabel className="font-weight-bold">
										${quote && quote.latestPrice}
									</ControlLabel>
									<ControlLabel className="small"> ({quote && quote.change})</ControlLabel>
								</FormGroup>
							</Col>
							<Col />
						</Row>

						<Row>
							<Col>
								<FormGroup>
									<FormControl.Static>{company.description}</FormControl.Static>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							{company.CEO && (
								<Col>
									<FormGroup>
										<ControlLabel className="font-weight-bold">CEO</ControlLabel>
										<FormControl.Static>{company.CEO}</FormControl.Static>
									</FormGroup>
								</Col>
							)}
							{company.industry && (
								<Col>
									<FormGroup>
										<ControlLabel className="font-weight-bold">Ramo</ControlLabel>
										<FormControl.Static>{company.industry}</FormControl.Static>
									</FormGroup>
								</Col>
							)}
							{company.website && (
								<Col>
									<FormGroup>
										<ControlLabel className="font-weight-bold">Site</ControlLabel>
										<FormControl.Static>
											<a href={company.website} target="_blank">
												{company.website}
											</a>
										</FormControl.Static>
									</FormGroup>
								</Col>
							)}
						</Row>
					</div>
				)}
			</div>
		);
	}
}

Detalhes.propTypes = {
	company: PropTypes.object,
	quote: PropTypes.object
};

export default Detalhes;
