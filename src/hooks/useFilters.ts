import { useContext } from 'react';

import { filtersContext } from '@contexts/filters';

const useFilters = () => {
  const filters = useContext(filtersContext);

  return filters;
};

export default useFilters;
