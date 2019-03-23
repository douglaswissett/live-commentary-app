import { Action } from 'redux';
import { GET_LIVE_COMMENTARY, GET_LIVE_COMMENTARY_SUCCESS, GET_LIVE_COMMENTARY_ERROR } from './types';
import apiData from '../../api/data.json';

export enum AppActionTypes {
  GetLiveCommentary = '[App] GetLiveCommentary',
  GetLiveCommentarySuccess = '[App] GetLiveCommentary Success',
  GetLiveCommentaryError = '[App] GetLiveCommentary Error',
}

export interface GetLiveCommentary extends Action {
  type: AppActionTypes.GetLiveCommentary;
}

export interface GetLiveCommentarySuccess extends Action {
  type: AppActionTypes.GetLiveCommentarySuccess;
  payload: any;
}

export interface GetLiveCommentaryError extends Action {
  type: AppActionTypes.GetLiveCommentaryError;
  payload: any;
}

export function createGetLiveCommentary() {
  return {
    type: GET_LIVE_COMMENTARY,
  };
}

export function createGetLiveCommentarySuccess(payload): GetLiveCommentarySuccess {
  return {
    type: GET_LIVE_COMMENTARY_SUCCESS,
    payload,
  };
}

export function createGetLiveCommentaryError(payload): GetLiveCommentaryError {
  return {
    type: GET_LIVE_COMMENTARY_ERROR,
    payload,
  };
}

export const getLiveCommentary = () => async (dispatch): GetLiveCommentary => {
  dispatch(createGetLiveCommentary());

  setTimeout(() => {
    dispatch(createGetLiveCommentarySuccess(apiData));
  }, 800);
};

export type AppActions = GetLiveCommentary | GetLiveCommentarySuccess | GetLiveCommentaryError;
