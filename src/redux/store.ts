import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import appReducer, { AppState } from './app/reducer';

export interface RootState {
  app: AppState;
}

const reducers = {
  app: appReducer,
};

// Root reducer
export const rootReducer = combineReducers(reducers);

// Initial state
const initialState = {};

// Middleware
const middleware = [thunk];

// Create redux store
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
