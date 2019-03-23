import { GET_LIVE_COMMENTARY, GET_LIVE_COMMENTARY_SUCCESS, GET_LIVE_COMMENTARY_ERROR } from './types';

export const getLiveCommentary = () => async dispatch => {};

export function createGetLiveCommentary() {
  return {
    type: GET_LIVE_COMMENTARY,
  };
}

export function createGetLiveCommentarySuccess(payload) {
  return {
    type: GET_LIVE_COMMENTARY_SUCCESS,
    payload,
  };
}

export function createGetLiveCommentaryError(payload) {
  return {
    type: GET_LIVE_COMMENTARY_ERROR,
    payload,
  };
}

export type Action = GetLiveCommentary | GetLiveCommentarySuccess | GetLiveCommentaryError;
