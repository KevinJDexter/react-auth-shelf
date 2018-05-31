import { put, takeEvery } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';
import { getShelfItems } from '../requests/shelfRequests';


function* fetchShelf(action) {
    try {
        const shelfItems = yield getShelfItems()
        yield put({
            type: SHELF_ACTIONS.SET_SHELF,
            payload: shelfItems.data
        });
    } catch (error) {

    };
}

function* shelfSaga() {
    yield takeEvery(SHELF_ACTIONS.FETCH_ITEMS, fetchShelf);
}

export default shelfSaga;