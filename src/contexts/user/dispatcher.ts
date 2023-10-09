import { Action } from './actions';

type UserState = User | null;

export const initialState: UserState = null;

export const userDispatcher = (
  state: UserState = initialState,
  action: Action,
): User | null => {
  switch (action.type) {
    case 'SET_USER':
      if (!action.payload) return state;
      return {
        ...action.payload,
      };
    case 'REMOVE_USER':
      return null;
    default:
      return state;
  }
};
