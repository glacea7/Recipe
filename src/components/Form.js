import React from 'react';

class Form extends React.Component {
	state = {
		newArr: [],
	};
	includesIngredients(ingred, event) {
		const { recipes } = this.props;
		let newArr = [];
		const value = event.target.value;

		if (!value) {
			recipes.forEach((recipe) => {
				if (recipe.ingredients.includes(ingred) === true) {
					newArr.push({ name: recipe.name, instructions: recipe.instructions });
					console.log('newArr:', newArr);
				}
			});
			console.log('newArr:', newArr);
			this.setState({ newArr: newArr });
			return newArr;
		}
	}

	render() {
		const { newArr } = this.state;
		return (
			<div>
				<table>
					<h1>
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
							/>
						</svg>{' '}
						Ingredient's List{' '}
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
							/>
						</svg>
					</h1>
					<p>
						Please mark off the following ingredients you have. <strong>Click ONCE only</strong>
					</p>
					<div class="form-check" onClick={(event) => this.includesIngredients('eggs', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Eggs
						</label>
					</div>

					<div class="form-check" onClick={(event) => this.includesIngredients('rice', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Rice
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('cilantro', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Cilantro
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('fish', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Fish
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('lettuce', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Lettuce
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('spam', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Spam
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('meat', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Meat
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('chicken', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Chicken
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('oil', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Oil
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('beef', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Beef
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('ketchup', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Ketchup
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('dough', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Dough
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('sausages', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Sausages
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('Cheese', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Cheese
						</label>
					</div>

					<div class="form-check" onClick={(event) => this.includesIngredients('carrot', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Carrot
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('soysauce', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Soysauce
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('meatballs', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Meatballs
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('chicken', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Chicken
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('spinach', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Spinach
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('shrimp', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Shrimp
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('onion', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Onion
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('pasta', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Pasta
						</label>
					</div>
					<div class="form-check" onClick={(event) => this.includesIngredients('tomato sauce', event)}>
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label class="form-check-label" for="defaultCheck1">
							Tomato Sauce
						</label>
					</div>
					<p>
						<strong>Dishes you can make as follows:</strong>
					</p>
					<div className="App-container">
						{newArr.map((rcpe) => (
							<span className="instr">
								<p key={rcpe.name}>{rcpe.name}</p>

								<p>{rcpe.instructions}</p>
							</span>
						))}
					</div>
				</table>
			</div>
		);
	}
}

export default Form;
