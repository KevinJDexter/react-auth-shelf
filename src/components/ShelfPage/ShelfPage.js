import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getItems } from '../../redux/actions/shelfActions';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ShelfView extends Component {


  componentDidMount() {
    this.props.dispatch(getItems());
  }

  render() {
    return (
      <div>
        <h1>ShelfView</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShelfView);