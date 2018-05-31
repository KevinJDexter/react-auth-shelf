export const SHELF_ACTIONS = {
  FETCH_ITEMS: 'FETCH_ITEMS',
};

export function getItems() {
  return { type: SHELF_ACTIONS.FETCH_ITEMS };
}