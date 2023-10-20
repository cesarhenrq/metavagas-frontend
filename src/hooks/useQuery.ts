import { useContext } from 'react';

import { queryContext } from '../contexts/query';

const useQuery = () => {
  const query = useContext(queryContext);

  return query;
};

export default useQuery;
