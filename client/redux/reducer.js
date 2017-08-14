import { TOGGLE_MODAL_DISPLAY } from './actions.js';


export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_DISPLAY:
      return Object.assign({}, state, {
        modalDisplay: !state.modalDisplay
        // modalDisplay: action.modalDisplay
      });
    default:
      return state;
  }
};
