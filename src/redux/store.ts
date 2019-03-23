import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// Reducers
import appReducer from './app/reducer';

const reducers = {
  app: appReducer,
};

// Root reducer
export const rootReducer = combineReducers(reducers);

// Initial state
const initialState = {};

// Middleware
const middleware = [];

// Enchancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create redux store
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
