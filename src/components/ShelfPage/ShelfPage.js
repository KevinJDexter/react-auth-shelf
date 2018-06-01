import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../redux/actions/shelfActions';
import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
    shelf: state.shelf
});

class ShelfPage extends Component {

  componentDidMount() {
    this.props.dispatch(getItems());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleDelete = (id) => {
    console.log('DELETE RAN', id);
    const action = {
      type: 'DELETE_ITEM',
      payload: id,
    }
    this.props.dispatch(action);
  }

  render() {

    const items = this.props.shelf.shelfReducer.map((item) => {
       return <li key={item.id}>{item.description}<button onClick={() => {this.handleDelete(item.id)}}>DELETE ITEM</button></li>
    });

    return (
      <div>
        <Nav />
        <h1>ShelfView</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShelfPage);