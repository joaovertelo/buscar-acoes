import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './modules/home/Home';
const Contato = () => <div> contato</div>;

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/" exact component={Home} />
				<Route path="/contato" exact component={Contato} />
			</React.Fragment>
		);
	}
}

export default Routes;
