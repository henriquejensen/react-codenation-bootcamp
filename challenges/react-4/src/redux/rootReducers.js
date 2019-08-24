/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as formReducer } from 'redux-form';

import characters from './characters/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({ formReducer, charactersReducer: characters });

export default rootReducers;
