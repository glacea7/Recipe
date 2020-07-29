import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './App.css';
import {Jumbotron} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

class App extends Component {
	state = {
		recipes: [],
		isTransition: false,
	};

	async componentDidMount() {
		const response = await axios.get('http://localhost:3001/recipes');
		console.log(response);

		this.setState({ recipes: response.data });
	}
	frontPage = () =>{
		const {isTransition} = this.state
		this.setState({
			isTransition: true
		})	
	}

	 handleNext = ()=> {
		const {recipes, isTransition} = this.state
		console.log(isTransition)
		if(isTransition===true)
		{
			return (<div>
		<div className="App-header"> </div>
				<div className="App">
					<div>{<Form recipes={recipes} />}</div>
				</div>
				</div>)
				}
	}
	
	render() {
		const { recipes } = this.state;
		this.handleNext()
		return (
			<div>
				<Jumbotron>
					<h1>Recipe Project!</h1>
					<p>
						This is a simple recipe program that allows you view available dishes from ingredients you select
					</p>
					<p>
						<button onClick={this.frontPage}>Begin</button>
					</p>
				</Jumbotron>
				
			</div>
		);
	}
	
}

export default App;
