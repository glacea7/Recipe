const initialState = {
	recipes: [],
};

function recipeReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_DATA': {
			const { recipes } = action.payload;
			return {
				...state,
				recipes: recipes,
			};
		}
		default:
			return state;
	}
}
export default recipeReducer;
