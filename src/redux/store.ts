import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
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

// @ts-ignore
// Enchancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create redux store
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
