// @flow

import { GET_LIVE_COMMENTARY, GET_LIVE_COMMENTARY_SUCCESS, GET_LIVE_COMMENTARY_ERROR } from './types';
import ApiData from '../../models/ApiData';

export interface AppState {
  isFetching: boolean;
  data: ApiData;
  error: boolean;
  errorMessage: string;
}

export const initialState = {
  isFetching: false,
  data: {},
  error: false,
  errorMessage: '',
};

export default (state: AppState = initialState, action) => {
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
