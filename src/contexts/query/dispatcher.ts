import { Action } from './actions';

export const initialState: string = '';

export const queryDispatcher = (
  state: string = initialState,
  action: Action,
): string => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.payload;
    default:
      return state;
  }
};
