import React, { Component } from 'react';
import axios from 'axios';
class RecipeForm extends React.Component {
	state = {
		userInput: '',
		recipes: [],
		show: false,
	};

	async getData() {
		const { userInput } = this.state;
		let { recipes } = this.state;
		const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&ingredients=${userInput}`;
		const result = await axios.get(url);
		console.log(process.env.REACT_APP_FOOD_API_KEY);
		recipes = result.data;
		console.log(result.data);
		this.setState({ userInput: '', recipes: recipes });
	}
	onChange = (event) => {
		let { userInput } = this.state;
		userInput = event.target.value;
		console.log(userInput);
		this.setState({ userInput: userInput });
	};
	formSubmit = (event) => {
		event.preventDefault();
		this.getData();
		this.setState({ show: true });
	};
	resultsCounter = () => {
		const { recipes, show } = this.state;
		let counter = 0;
		if (show) {
			for (let i = 0; i <= recipes.length; i++) {
				counter = counter + i;
				return counter;
			}
		}
	};
	expandRecipe = () => {};
	render() {
		let { userInput, recipes, show } = this.state;
		return (
			<div className="section2" id="recipe">
				<div className="section2Content">
					<div className="section2Header">
						<h1>
							<font size="50">Search Your Recipe</font>
						</h1>
					</div>
					<div className="section2Search">
						<form onSubmit={this.formSubmit}>
							<input type="text" placeholder="Enter Ingredients" autoComplete="off" onChange={this.onChange} value={userInput} />
							<input type="submit" value="Search" />
						</form>
					</div>
				</div>
				<div>
					<div className="display">
						<h1>{this.resultsCounter}</h1>
					</div>{' '}
					<div className="displayResults">
						{recipes !== [] &&
							recipes.map((recipe) => (
								<div className="displayResultsBox">
									<li key={recipe.id}>
										{recipe.title}
										<img src={recipe.image} />
									</li>
								</div>
							))}
					</div>
				</div>
			</div>
		);
	}
}
export default RecipeForm;
