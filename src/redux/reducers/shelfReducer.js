import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';

const shelfReducer = (state=[], action) =>{
    switch(action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    shelfReducer,
});