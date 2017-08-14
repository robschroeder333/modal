import React from 'react';
import { connect } from 'react-redux';
import { toggleModalDisplay } from '../../redux/actions.js';

import m_Name from './modals/name.js';


export const home = (props) => (
  <div>
    <h1>Name</h1>
    <h5>{props.name}</h5>
    <button onClick={props.toggleModal}>Edit</button>
    <br />

    <h1>Address</h1>
    <h5>{props.address}</h5>
    <button onClick={props.toggleModal}>Edit</button>
    <br />

    <h1>Favorite Teams</h1>
    <ol>
      {props.favorites.map((ele, i) => (<li>{ele}</li>))}
    </ol>
    <button onClick={props.toggleModal}>Edit</button>
  </div>
);

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModalDisplay())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
