export const SHELF_ACTIONS = {
  FETCH_ITEMS: 'FETCH_ITEMS',
  SET_SHELF: 'SET_SHELF',
};

export function getItems() {
  return { type: SHELF_ACTIONS.FETCH_ITEMS };
}