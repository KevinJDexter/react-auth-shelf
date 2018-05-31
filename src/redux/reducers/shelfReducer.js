import { combineReducers } from 'redux';
import { SHELF_ACTIONS } from '../actions/shelfActions';

const shelfReducer = (state=[], action) =>{
    switch(action.type) {
        case SHELF_ACTIONS.SET_SHELF:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    shelfReducer,
});