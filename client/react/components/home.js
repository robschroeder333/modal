import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions.js';

import ModName from './modals/name.js';
import ModAddress from './modals/address.js';
import ModFavorites from './modals/favorites.js';

//hold each modal and corresponding button to "open" modal
export const home = (props) => (
  <div>
    <h1>Personal Information</h1>
    <hr />

    <h2>Name</h2>
    <h5>{props.name}</h5>
    <button onClick={() => (props.openModal('name'))}>Edit</button>
    <ModName currentModal={props.currentModal} props={props}/>
    <hr />

    <h2>Address</h2>
    <h5>{props.address}</h5>
    <button onClick={() => (props.openModal('address'))}>Edit</button>
    <ModAddress currentModal={props.currentModal} props={props} />
    <hr />

    <h2>Favorite Teams</h2>
    <ol>
      {props.favorites.map((ele, i) => (<li key={i} >{ele}</li>))}
    </ol>
    <button onClick={() => (props.openModal('favorites'))}>Edit</button>
    <ModFavorites currentModal={props.currentModal} props={props} />
  </div>
);

//connect to redux store to display data entered into modal
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
