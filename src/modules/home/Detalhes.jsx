import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class Detalhes extends Component {
	render() {
		const { company, quote } = this.props;
		return (
			<div>
				{company &&
				quote && (
					<div>
						<div className="row">
							<div className="col">
								<FormGroup>
									<ControlLabel className="font-weight-bold">
										{company.companyName} ({company.symbol})
									</ControlLabel>
								</FormGroup>
							</div>
							<div className="col">
								<FormGroup>
									<ControlLabel className="font-weight-bold">
										${quote && quote.latestPrice}
									</ControlLabel>
									<ControlLabel className="small"> ({quote && quote.change})</ControlLabel>
								</FormGroup>
							</div>
							<div className="col" />
						</div>
						<div className="row">
							<div className="col">
								<FormGroup>
									<FormControl.Static>{company.description}</FormControl.Static>
								</FormGroup>
							</div>
						</div>
						<div className="row">
							<div className="col" />
						</div>
						<div className="row">
							{company.CEO && (
								<div className="col">
									<FormGroup>
										<ControlLabel className="font-weight-bold">CEO</ControlLabel>
										<FormControl.Static>{company.CEO}</FormControl.Static>
									</FormGroup>
								</div>
							)}
							{company.industry && (
								<div className="col">
									<FormGroup>
										<ControlLabel className="font-weight-bold">Ramo</ControlLabel>
										<FormControl.Static>{company.industry}</FormControl.Static>
									</FormGroup>
								</div>
							)}
							{company.website && (
								<div className="col">
									<FormGroup>
										<ControlLabel className="font-weight-bold">Site</ControlLabel>
										<FormControl.Static>
											<a href={company.website} target="_blank">
												{company.website}
											</a>
										</FormControl.Static>
									</FormGroup>
								</div>
							)}
						</div>
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
