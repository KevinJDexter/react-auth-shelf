import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ViewAllUsers extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }

    getTheUsers = () => {
        axios({
            method: 'GET',
            url: '/api/shelf/count',
        })
        .then((response) => {
            this.setState({
                users: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default connect()(ViewAllUsers);