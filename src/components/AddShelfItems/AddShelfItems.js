import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import Nav from '../Nav/Nav';



const mapStateToProps = state => ({
    user: state.user,
});

class AddShelfItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            image_url: '',
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleChangeFor = (property) => (event) => {
        this.setState  ({
            [property]: event.target.value
        })
        
    }

    submitItem = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SHELF_ITEM', payload: this.state})
        this.setState ({
            description: '',
            image_url: '',
        })

    }

    render() {
        return (
            <div>
                <Nav />
                <form onSubmit={this.submitItem}>
                    <input placeholder="Description" value={this.state.description} onChange={this.handleChangeFor('description')} />
                    <input placeholder="Image_url" value={this.state.image_url} onChange={this.handleChangeFor('image_url')} />
                    <input type="submit" />
                </form>

            </div>

        )
    };

}

export default connect(mapStateToProps)(AddShelfItems);