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
    this.props.updateData('favorites', data);
  }

  addFavorite () {
    let list = document.getElementById('list');
    let nextKey = list.children.length;

    let item = document.createElement("li");
    let input = document.createElement("input");
    input.type = "text";
    input.key = nextKey;
    let itemWithInput = item.appendChild(input);
    list.appendChild(itemWithInput);
  }

  render () {
    if (this.props.currentModal === 'favorites') {
      if (this.props.favorites.length < 1){
        return (
          <div>
            <div className="modal">
              <form name="favorites" onSubmit={this.onSubmit}>
                <label name="favorites">Favorites:</label>
                <ol id="list">
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
                <h3 onClick={this.addFavorite} >Add Favorite</h3>
                <button onClick={() => this.props.closeModal('favorites')}>Cancel</button>
                <input type="submit" value="submit" />
              </form>
            </div>
            <div className="background" onClick={() => this.props.closeModal('favorites')}></div>
          </div>
      );
      } else {
        return (
          <div>
            <div className="modal">
              <form name="favorites" onSubmit={this.onSubmit}>
                <label name="favorites">Favorites:</label>
                <ol id="list">
                {
                  this.props.favorites.map((ele, i) => (
                    <li>
                      <input type="text" key={`m${i}`} defaultValue={ele}/>
                    </li>
                  ))
                }
                </ol>
                <h5 onClick={this.addFavorite}>+ Add Favorite</h5>
                <button onClick={() => this.props.closeModal('favorites')}>Cancel</button>
                <input type="submit" value="submit" />
              </form>
            </div>
            <div className="background" onClick={() => this.props.closeModal('favorites')}></div>
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
