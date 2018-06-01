export const SHELF_ACTIONS = {
  FETCH_ITEMS: 'FETCH_ITEMS',
  SET_SHELF: 'SET_SHELF',
  DELETE_ITEM: 'DELETE_ITEM',
  ADD_SHELF_ITEM: 'ADD_SHELF_ITEM',
};


export function getItems() {
  return { type: SHELF_ACTIONS.FETCH_ITEMS };
}