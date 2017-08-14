import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducer.js';
import logger from 'redux-logger';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducer,
  {started: true},
  composeEnhancers(
    applyMiddleware(logger)
  )
);

export default store;
