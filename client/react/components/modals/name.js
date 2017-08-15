import React from 'react';
import { connect } from 'react-redux';
import { closeModal, updateData } from '../../../redux/actions.js';


export class name extends React.Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    let fName = e.target.firstname.value;
    let lName = e.target.lastname.value;
    this.props.updateData('name', `${fName} ${lName}`);
  }

  render () {
    if (this.props.currentModal === 'name') {
      return (
        <div className="modal">
          <form onSubmit={this.onSubmit}>
            <label name="firstname">First name:</label>
            <input type="text" name="firstname" />
            <label name="lastname">Last name:</label>
            <input type="text" name="lastname" />
            <input type="submit" value="submit" />
          </form>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

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
