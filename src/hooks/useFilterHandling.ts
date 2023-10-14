import { useContext } from 'react';

import { useNavigate } from 'react-router';

import { filtersContext, actions } from '@contexts/filters';
import { queryContext, queryActions } from '@contexts/query';

import { buildQueryString } from '@utils/functions';

const useFilterHandling = () => {
  const { filters, filtersDispatch } = useContext(filtersContext);
  const { queryDispatch } = useContext(queryContext);

  const navigate = useNavigate();

  const handleFilter = (activeTab: string, filter: string) => {
    switch (activeTab) {
      case 'technology':
        filtersDispatch(actions.addTechnology(filter));
        break;
      case 'location':
        filtersDispatch(actions.addLocation(filter));
        break;
      case 'roles':
        filtersDispatch(actions.addRole(filter));
        break;
      default:
        filtersDispatch(actions.addTechnology(filter));
    }

    const queryString = buildQueryString(filters);
    queryDispatch(queryActions.setQuery(queryString));

    navigate('/vacancies');
  };

  return { handleFilter };
};

export default useFilterHandling;
