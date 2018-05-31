import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
  });

class AddShelfItems extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="Description" />
                    <input placeholder="Image_url" />
                    <input type="submit" />
                </form>

            </div>

        )
    };

}

export default connect(mapStateToProps)(AddShelfItems);