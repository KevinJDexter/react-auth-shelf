import { put, takeEvery, call } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';
import { callPostShelfItem } from '../requests/shelfRequests'



function* fetchShelf() {
    try {

    } catch (error) {

    };
}

function* postShelfItem(action) {
    try {
        yield callPostShelfItem(action.payload)
    } catch (error) {

    }
}

function* shelfSaga() {
    yield takeEvery(SHELF_ACTIONS.FETCH_SHELF, fetchShelf);
    yield takeEver(SHELF_ACTIONS.ADD_SHELF_ITEM, postShelfItem)
}

export default shelfSaga;