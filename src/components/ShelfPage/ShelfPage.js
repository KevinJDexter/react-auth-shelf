import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getItems } from '../../redux/actions/shelfActions';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ShelfPage extends Component {


  componentDidMount() {
    this.props.dispatch(getItems());
  }

  render() {

    const items = this.props.reduxState.shelf.shelfReducer.map((item) => {
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