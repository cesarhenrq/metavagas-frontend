import { useReducer } from 'react';

import filtersContext from './context';

import { filtersDispatcher, initialState } from './dispatcher';

type Props = {
  children: React.ReactNode;
};

const FiltersProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(filtersDispatcher, initialState);

  return (
    <filtersContext.Provider
      value={{ filters: state, filtersDispatch: dispatch }}
    >
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersProvider;
