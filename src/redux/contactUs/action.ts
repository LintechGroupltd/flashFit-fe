// actions.ts

import * as actionTypes from './actionTypes';

export const submitContactForm = (formData: any) => ({
  type: actionTypes.SUBMIT_CONTACT_FORM,
  payload: formData,
});

export const submitContactFormSuccess = (data: any) => ({
  type: actionTypes.SUBMIT_CONTACT_FORM_SUCCESS,
  payload: data,
});

export const submitContactFormError = (error: string) => ({
  type: actionTypes.SUBMIT_CONTACT_FORM_ERROR,
  payload: error,
});
