import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron text-center">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Buscar Ações</h1>
					<p>Pesquise e/ou selecione uma opção no select para ver os dados da empresa!!! </p>
				</div>

				{this.props.children}
			</div>
		);
	}
}

export default App;
