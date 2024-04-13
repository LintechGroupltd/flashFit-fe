// sagas.ts

import { takeLatest, put, call } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import axios from 'axios';

function* submitContactFormSaga(action: any) {
  try {
    const response = yield call(axios.post, '/api/contact', action.payload);
    yield put({ type: actionTypes.SUBMIT_CONTACT_FORM_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: actionTypes.SUBMIT_CONTACT_FORM_ERROR, payload: error.message });
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.SUBMIT_CONTACT_FORM, submitContactFormSaga);
}

export default rootSaga;
