export const SHELF_ACTIONS = {
  OBTAIN_USERS: 'OBTAIN_USERS',
  SET_USERS: 'SET_USERS',
  };
  
  export function getTheUsersShelfAction() {
    return { type: SHELF_ACTIONS.OBTAIN_USERS };
  }