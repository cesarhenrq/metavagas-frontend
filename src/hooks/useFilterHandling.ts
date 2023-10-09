import { useContext } from 'react';

import { useNavigate } from 'react-router';

import { filtersContext, actions } from '@contexts/filters';

const useFilterHandling = () => {
  const { filtersDispatch } = useContext(filtersContext);

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

    navigate('/vacancies');
  };

  return { handleFilter };
};

export default useFilterHandling;
