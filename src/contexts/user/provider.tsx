import { useReducer, Reducer, useEffect } from 'react';

import userContext from './context';

import { Action } from './actions';

import { userDispatcher, initialState } from './dispatcher';

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer<Reducer<User | null, Action>>(
    userDispatcher,
    initialState,
  );

  useEffect(() => {
    const user = localStorage.getItem('metavagas-user');

    if (user) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(user) });
    }
  }, []);

  return (
    <userContext.Provider value={{ user: state, userDispatch: dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
