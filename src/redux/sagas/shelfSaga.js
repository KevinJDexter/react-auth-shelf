import { put, takeEvery } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';
import { getShelfItems, deleteShelfItem } from '../requests/shelfRequests';


function* fetchShelf(action) {
    try {
        const shelfItems = yield getShelfItems()
        yield put({
            type: SHELF_ACTIONS.SET_SHELF,
            payload: shelfItems
        });
    } catch (error) {
        console.log(error);
    };
}

function* deleteItem(action) {
    try{
        yield deleteShelfItem(action.payload);
        const shelfItems = yield getShelfItems()
        yield put({
            type: SHELF_ACTIONS.SET_SHELF,
            payload: shelfItems
        }); 
    } catch(error) {
        console.log(error);
    }
}

function* shelfSaga() {
    yield takeEvery(SHELF_ACTIONS.FETCH_ITEMS, fetchShelf);
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default shelfSaga;