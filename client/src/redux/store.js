import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redu-devtools-extension';
import thunk from 'redux-thunk';

import alerts from './AlertReducer';

// initial state
const initialState = {};

// define reducers
const reducers = {
  // auth: authReducer,
  alerts: alerts,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

//create store
const store = createStore(
  combinedReducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
