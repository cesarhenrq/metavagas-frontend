import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';

import { filtersContext, actions } from '@contexts/filters';
import { queryContext, queryActions } from '@contexts/query';

import removeDuplicate from '@utils/functions';
import { buildQueryString } from '@utils/functions';

const useSearchHandling = (
  positionOrTech: string,
  location: string,
  addRecentSearch: (recentSearch: string) => void,
) => {
  const { filters, filtersDispatch } = useContext(filtersContext);
  const { queryDispatch } = useContext(queryContext);

  const [vacancies, vacanciesService] = useResource<Vacancy>('vacancies');
  const [technologies, technologiesService] =
    useResource<Technology>('technologies');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useFetchResource<Vacancy>(vacanciesService);
  useFetchResource<Technology>(technologiesService);

  const roles = removeDuplicate(vacancies, 'vacancyRole');

  const handleSearch = () => {
    positionOrTech && addRecentSearch(positionOrTech);
    filtersDispatch(actions.addLocation(location));

    if (technologies.map(({ tecName }) => tecName).includes(positionOrTech)) {
      filtersDispatch(actions.addTechnology(positionOrTech));
    } else if (roles.includes(positionOrTech)) {
      filtersDispatch(actions.addRole(positionOrTech));
    } else {
      filtersDispatch(actions.addDescription(positionOrTech));
    }

    queryDispatch(queryActions.setQuery(buildQueryString(filters)));

    pathname === '/' && navigate('/vacancies');
  };

  return handleSearch;
};

export default useSearchHandling;
