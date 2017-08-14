// import {  } from './actions.js';

const ACTION_NAME = 'ACTION_NAME';

export default (state, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return Object.assign({}, state, {
        //new state
      });
    default:
      return state;
  }
};
