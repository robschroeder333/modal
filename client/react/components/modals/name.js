import React from 'react';
import { connect } from 'react-redux';
import { closeModal, updateData } from '../../../redux/actions.js';

export const name = (props) => {

  if (props.currentModal === 'name') {
    return (
      <form>
        <label name="firstname">First name:</label>
        <input type="text" name="firstname" />
        <label name="lastname">Last name:</label>
        <input type="text" name="lastname" />
        <button type="submit" onClick={() => updateData('name', /* determine best way to grab input data on submit */)} />
      </form>
    );
  } else {
    return (
      <div></div>
    );
  }
};

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: (name) => dispatch(closeModal(name)),
    updateData: (name, data) => dispatch(updateData(name, data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(name);
