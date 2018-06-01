import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';

// import { fetchUser } from '../../redux/actions/userActions';
import { getTheUsersShelfAction } from '../../redux/actions/shelfActions';
// import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
    people: state.shelf.peopleReducer,
    user: state.user,
});

class ViewAllUsers extends Component {
    componentDidMount() {
        // this.props.dispatch(fetchUser());
        this.props.dispatch(getTheUsersShelfAction());
        // this.props.dispatch(getTheUsersShelfAction());
        
    }


    // UNCOMMENT THIS FOR AUTHENTICATION FEATURE
    // componentDidUpdate() {
    //     if (!this.props.user.isLoading && this.props.user.userName === null) {
    //         this.props.history.push('home');
    //     }
    // }

    // logout = () => {
    //     this.props.dispatch(triggerLogout());
    // }

    render() {
        return (
            <div>
                <Nav />
                <table>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Total Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.people.map((person) => <tr key={person.id}>
                        <td>{person.username}</td>
                        <td>{person.count}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ViewAllUsers);