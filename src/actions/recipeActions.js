import axios from 'axios';

export const getData = (userInput) => {
	return async (dispatch, getState) => {
		try {
			const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&ingredients=${userInput}`;
			const result = await axios.get(url);
			console.log(process.env.REACT_APP_FOOD_API_KEY);
			const recipes = result.data;
			console.log(result.data);

			dispatch({
				type: 'GET_DATA',
				payload: { recipes: recipes },
			});
		} catch (error) {
			console.log('ERROR:', error.message);
		}
	};
};
