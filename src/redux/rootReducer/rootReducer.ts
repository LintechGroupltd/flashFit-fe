// reducers.ts

import { combineReducers } from 'redux';
import contactFormReducer from '../contactUs/reducer';


const rootReducer = combineReducers({
  contactForm: contactFormReducer,
  // Add other reducers here if needed
});

export default rootReducer;
