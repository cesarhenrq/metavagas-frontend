import { createContext, Dispatch } from 'react';

import { initialState } from './dispatcher';
import { Action } from './actions';

type QueryContext = {
  query: string;
  queryDispatch: Dispatch<Action>;
};

const queryContext = createContext<QueryContext>({
  query: initialState,
  queryDispatch: () => {},
});

export default queryContext;
