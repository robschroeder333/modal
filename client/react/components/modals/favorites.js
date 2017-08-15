import React from 'react';
import { connect } from 'react-redux';
import { closeModal, updateData } from '../../../redux/actions.js';


export class favorites extends React.Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    let favoritesData = Array.from(e.target.elements)
      .filter((ele) => ele.type === 'text');

    let data = favoritesData.map(ele => ele.value);

    console.log(data)
    this.props.updateData('favorites', data);
  }

  render () {
    if (this.props.currentModal === 'favorites') {
      if (this.props.favorites.length < 1){
        return (
          <div className="modal">
            <form name="favorites" onSubmit={this.onSubmit}>
              <label name="favorites">Favorites:</label>
              <ol>
                <li>
                  <input type="text" key="0" />
                </li>
                <li>
                  <input type="text" key="1" />
                </li>
                <li>
                  <input type="text" key="2" />
                </li>
              </ol>
              <input type="submit" value="submit" />
            </form>
          </div>
      );
      } else {
        return (
          <div className="modal">
          <form name="favorites" onSubmit={this.onSubmit}>
            <label name="favorites">Favorites:</label>
            <ol>
            {
              this.props.favorites.map((ele, i) => (
                <li>
                  <input type="text" key={`m${i}`} defaultValue={ele}/>
                </li>
              ))
            }
            </ol>
            <input type="submit" value="submit" />
          </form>
        </div>

        );
      }
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
)(favorites);
