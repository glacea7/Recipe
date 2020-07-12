import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './App.css';

class App extends Component {
	state = {
		recipes: [],
	};

	async componentDidMount() {
		const response = await axios.get('http://localhost:3001/recipes');
		console.log(response);

		this.setState({ recipes: response.data });
	}

	render() {
		const { recipes } = this.state;

		return (
			<div>
				<div className="App-header"> </div>
				<div className="App">
					{/* <ul className="App-ul">
					{recipes.map((rcpe) => (
						<li key={rcpe}>{rcpe.name}</li>
					))}
				</ul> */}
					<div>{<Form recipes={recipes} />}</div>
				</div>
			</div>
		);
	}
}
export default App;
