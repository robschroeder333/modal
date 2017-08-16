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
    this.props.updateData('name', e.target.fullName.value);
  }

  render () {
    if (this.props.currentModal === 'name') {
      return (
        <div>
          <div className="modal">
            <form onSubmit={this.onSubmit}>
              <label name="fullName">Name:</label>
              <input type="text" name="fullName" defaultValue={this.props.name}/>
              <br />
              <button onClick={() => this.props.closeModal('name')}>Cancel</button>
              <button type="submit">Save</button>
            </form>
          </div>
          <div className="background" onClick={() => this.props.closeModal('name')}></div>
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
