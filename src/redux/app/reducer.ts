// @flow

import { GET_LIVE_COMMENTARY, GET_LIVE_COMMENTARY_SUCCESS, GET_LIVE_COMMENTARY_ERROR } from './types';

export const initialState = {
  isFetching: false,
  data: { questions: [] },
  error: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIVE_COMMENTARY:
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    case GET_LIVE_COMMENTARY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case GET_LIVE_COMMENTARY_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.message,
        isFetching: false,
      };
    default:
      // action;
      return state;
  }
};
