import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import AppActionTypes from './types';
import apiData from '../../api/data.json';
import ApiData from '../../models/ApiData';

interface Error {
  message: string;
}

export interface GetLiveCommentary extends Action {
  type: AppActionTypes.GetLiveCommentary;
}

export interface GetLiveCommentarySuccess extends Action {
  type: AppActionTypes.GetLiveCommentarySuccess;
  payload: ApiData;
}

export interface GetLiveCommentaryError extends Action {
  type: AppActionTypes.GetLiveCommentaryError;
  payload: Error;
}

export function createGetLiveCommentary(): GetLiveCommentary {
  return {
    type: AppActionTypes.GetLiveCommentary,
  };
}

export function createGetLiveCommentarySuccess(payload: ApiData): GetLiveCommentarySuccess {
  return {
    type: AppActionTypes.GetLiveCommentarySuccess,
    payload,
  };
}

export function createGetLiveCommentaryError(payload: Error): GetLiveCommentaryError {
  return {
    type: AppActionTypes.GetLiveCommentaryError,
    payload,
  };
}

export const getLiveCommentary = () => async (dispatch: ThunkDispatch<{}, {}, Action>): Promise<void> => {
  dispatch(createGetLiveCommentary());

  setTimeout(() => {
    dispatch(createGetLiveCommentarySuccess(apiData));
  }, 600);
};

export type AppActions = GetLiveCommentary | GetLiveCommentarySuccess | GetLiveCommentaryError;
