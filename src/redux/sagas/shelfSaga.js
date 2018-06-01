import { put, takeEvery } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';
import {getUsers} from '../requests/shelfRequests';


function* fetchShelf() {
    try {

    } catch (error) {

    };
}

function* getTheUsers(action) {
    try {
        const userList = yield getUsers();
        yield put({
            type: SHELF_ACTIONS.SET_USERS,
            payload: userList,
        });
    }
    catch (error) {
        console.log(error);
    }
}

function* shelfSaga() {
    // yield takeEvery(SHELF_ACTIONS.FETCH_SHELF, fetchShelf);
    yield takeEvery(SHELF_ACTIONS.OBTAIN_USERS, getTheUsers);
}

export default shelfSaga;