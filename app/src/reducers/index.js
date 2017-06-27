
import * as actions from '../actions';
// Add your code for the languageReducer
const initialState = {
    language:"en"
};

export const languageReducer = (state=initialState, action) => {
    if (action.type === actions.SET_LANGUAGE) {
        return Object.assign({}, state, {
          language:action.language
        });
    }    
   
    return state;
};

