import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../actions/recipeActions';

class RecipeForm extends React.Component {
	state = {
		userInput: '',
		recipes: [],
		show: false,
	};

	// async getData() {
	// 	const { userInput } = this.state;
	// 	let { recipes } = this.state;
	// 	const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&ingredients=${userInput}`;
	// 	const result = await axios.get(url);
	// 	console.log(process.env.REACT_APP_FOOD_API_KEY);
	// 	recipes = result.data;
	// 	console.log(result.data);
	// 	this.setState({ userInput: '', recipes: recipes });
	// }
	onChange = (event) => {
		let { userInput } = this.state;
		userInput = event.target.value;
		console.log(userInput);
		this.setState({ userInput: userInput });
	};
	formSubmit = (event) => {
		const { userInput } = this.state;
		const { triggerGetData } = this.props;
		event.preventDefault();
		triggerGetData(userInput);
		this.setState({ show: true });
	};

	render() {
		let { userInput, show } = this.state;
		const { recipes } = this.props;
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
const mapStateToProps = (state) => {
	return { recipes: state.recipeData.recipes };
};
const mapDispatchToProps = (dispatch) => {
	return { triggerGetData: bindActionCreators(getData, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
