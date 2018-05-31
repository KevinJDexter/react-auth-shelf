import { combineReducers } from 'redux';
import { SHELF_ACTIONS } from '../actions/shelfActions';

const shelfReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const peopleReducer = (state = [], action) => {
    switch (action.type) {
        case SHELF_ACTIONS.SET_USERS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    shelfReducer,
    peopleReducer,
});