import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions.js';

import ModName from './modals/name.js';
import ModAddress from './modals/address.js';


export const home = (props) => (
  <div>
    <h1>Name</h1>
    <h5>{props.name}</h5>
    <button onClick={() => (props.openModal('name'))}>Edit</button>
    <ModName currentModal={props.currentModal} props={props}/>
    <br />

    <h1>Address</h1>
    <h5>{props.address}</h5>
    <button onClick={() => (props.openModal('address'))}>Edit</button>
    <ModAddress currentModal={props.currentModal} props={props} />
    <br />

    <h1>Favorite Teams</h1>
    <ol>
      {props.favorites.map((ele, i) => (<li>{ele}</li>))}
    </ol>
    <button onClick={() => (props.openModal('favorites'))}>Edit</button>
  </div>
);

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (name) => dispatch(openModal(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
