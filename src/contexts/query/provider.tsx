import { useReducer, Reducer } from 'react';

import queryContext from './context';

import { Action } from './actions';

import { queryDispatcher, initialState } from './dispatcher';

type Props = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer<Reducer<string, Action>>(
    queryDispatcher,
    initialState,
  );

  return (
    <queryContext.Provider value={{ query: state, queryDispatch: dispatch }}>
      {children}
    </queryContext.Provider>
  );
};

export default QueryProvider;
