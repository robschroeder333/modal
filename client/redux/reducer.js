import { TOGGLE_MODAL_DISPLAY, OPEN_MODAL, CLOSE_MODAL, UPDATE_DATA } from './actions.js';


export default (state, action) => {
  console.log(action.type)
  switch (action.type) {

    case OPEN_MODAL:
      return Object.assign({}, state, {
        currentModal: action.name,
        canDisplayModal: false
      });

    case CLOSE_MODAL:
      return Object.assign({}, state, {
        currentModal: '',
        canDisplayModal: true
      });

    case UPDATE_DATA:
      return Object.assign({}, state, {
        currentModal: '',
        canDisplayModal: true,
        [action.name]: action.data
      });

    default:
      return state;
  }
};
