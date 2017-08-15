import React from 'react';
import { connect } from 'react-redux';
import { closeModal, updateData } from '../../../redux/actions.js';


export class address extends React.Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    // console.log(props)
    this.props.updateData('address', e.target.address.value);
  }

  render () {
    if (this.props.currentModal === 'address') {
      return (
        <div className="modal">
          <form onSubmit={this.onSubmit}>
            <label name="address">Address:</label>
            <textarea rows="5" cols="60" name="address" />
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
)(address);
