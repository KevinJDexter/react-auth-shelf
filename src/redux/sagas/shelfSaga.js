import { put, takeEvery } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';
import {getUsers} from '../requests/shelfRequests';


function* fetchShelf() {
    try {

    } catch (error) {

    };
}

function* getTheUsers() {
    try {
        const allUsers = yield getUsers();
    }
    catch (error) {
        console.log(error);
    }
}

function* shelfSaga() {
    yield takeEvery(SHELF_ACTIONS.FETCH_SHELF, fetchShelf);
    yield takeEvery(SHELF_ACTIONS.OBTAIN_USERS, getTheUsers);
}

export default shelfSaga;