//
// action types

export const TOGGLE_MODAL_DISPLAY = 'TOGGLE_MODAL_DISPLAY';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_DATA = 'UPDATE_DATA';

//
// action creators

export const openModal = (name) => ({
  type: OPEN_MODAL,
  name
});

export const closeModal = (name) => ({
  type: CLOSE_MODAL,
  name
});

export const updateData = (name, data) => ({
  type: UPDATE_DATA,
  name,
  data
});
