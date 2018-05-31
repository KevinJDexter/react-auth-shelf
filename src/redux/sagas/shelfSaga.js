import { put, takeEvery } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';


function* fetchShelf() {
    try {

    } catch (error) {

    };
}

function* shelfSaga() {
    yield takeEvery(SHELF_ACTIONS.FETCH_SHELF, fetchShelf);
  }

export default shelfSaga;