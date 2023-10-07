import { createContext, Dispatch } from 'react';

import { Filters } from './dispatcher';

import { initialState } from './dispatcher';
import { Action } from './actions';

type FiltersContext = {
  filters: Filters;
  filtersDispatch: Dispatch<Action>;
};

const filtersContext = createContext<FiltersContext>({
  filters: initialState,
  filtersDispatch: () => {},
});

export default filtersContext;
