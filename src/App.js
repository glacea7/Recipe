import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Button from 'react-bootstrap/Button';
import Main from './components/Main';
import RecipeForm from './components/RecipeForm';
import { Link, animateScroll as scroll } from 'react-scroll';

class App extends Component {
	state = {
		recipes: [],
		isTransition: false,
		scale: 1,
	};
	onScale = () => {
		this.setState({
			scale: this.state.scale > 1 ? 1 : 1.1,
		});
	};
	jumboPage = () => {
		const { isTransition } = this.state;
		{
			return (
				<div>
					<div className="frontPage">
						<h1>Recipe Projectssss</h1>a simple recipe program
					</div>
				</div>
			);
			// return(
			// 	<div >
			// <div className="mainS" >
			// 		<div class="front1">	<h1><strong>Recipe Projectssssss</strong></h1>	</div>
			// 		<section className="front2">
			// 		<p1 >
			// 			A simple recipe program
			// 		</p1>
			// 	</section>
			// 	</div>
			// 		<div className="bootButton">
			// 		<p>
			// 		<Link
			// 			activeClass="active"
			// 			to="recipeForm"
			// 			spy={true}
			// 			smooth={true}
			// 			offset={-70}
			// 			duration= {500}
			// 		> <button type="button" class="btn btn-primary btn-lg">View Program</button> </Link>
			// 		</p>

			// 		</div>
			// </div>
			// )
		}
	};

	render() {
		const { recipes, isTransition, scale } = this.state;
		const styles = {
			transition: 'all 1s ease-out',
		};
	
		console.log('recipes', recipes);
		return (
			<div className="App">
				<div className="banner">
					<div className="bannerCursor">
						<Link to="main" spy={true} smooth={true} offset={0} duration={500}>
							<img src="https://www.svgrepo.com/show/9399/home.svg" alt="home" width="60" height="40" />
						</Link>
						{/* <div className="arrowUp">
							<Link to="main" spy={true} smooth={true} offset={0} duration={500}>
								<img src="https://www.svgrepo.com/show/52696/up-arrow.svg" width="30" />
							</Link>
						</div> */}
					</div>
				</div>
				<div className="arrowDown" onClick={this.onScale} styles={{ transform: 'scale(' + this.state.scale + ')' }}>
					<Link to="recipe" spy={true} smooth={true} offset={0} duration={500}>
						<img src="https://www.svgrepo.com/show/52695/down-arrow.svg" width="30" />
					</Link>
				</div>

				<Main />
				<div className="filler">a</div>
				<RecipeForm />
			</div>
		);
	}
}

export default App;
