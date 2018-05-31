import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../redux/actions/shelfActions';

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

  render() {

    const items = this.props.shelf.shelfReducer.map((item) => {
       return <li key={item.id}>{item.description}</li>
    });

    return (
      <div>
        <h1>ShelfView</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShelfPage);