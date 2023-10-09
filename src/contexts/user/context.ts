import { createContext, Dispatch } from 'react';

import { initialState } from './dispatcher';
import { Action } from './actions';

type UserContext = {
  user: User | null;
  userDispatch: Dispatch<Action>;
};

const userContext = createContext<UserContext>({
  user: initialState,
  userDispatch: () => {},
});

export default userContext;
