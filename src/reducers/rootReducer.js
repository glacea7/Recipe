import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	recipeData: recipeReducer,
});

export default rootReducer;
