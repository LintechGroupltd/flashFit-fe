// reducers.ts

import * as actionTypes from './actionTypes';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  selectedService: null,
  message: '',
};

const contactFormReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SUBMIT_CONTACT_FORM_SUCCESS:
      // Handle success action if needed
      return state;
    case actionTypes.SUBMIT_CONTACT_FORM_ERROR:
      // Handle error action if needed
      return state;
    default:
      return state;
  }
};

export default contactFormReducer;
