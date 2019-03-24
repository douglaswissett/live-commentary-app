// @flow

import { AppActions } from './actions';
import AppActionTypes from './types';
import ApiData from '../../models/ApiData';

export interface AppState {
  isFetching: boolean;
  data: ApiData | undefined;
  error: boolean;
  errorMessage: string;
}

export const initialState = {
  isFetching: false,
  data: undefined,
  error: false,
  errorMessage: '',
};

export default (state: AppState = initialState, action: AppActions) => {
  switch (action.type) {
    case AppActionTypes.GetLiveCommentary:
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    case AppActionTypes.GetLiveCommentarySuccess:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case AppActionTypes.GetLiveCommentaryError:
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
