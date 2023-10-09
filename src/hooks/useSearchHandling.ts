import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';

import { filtersContext, actions } from '@contexts/filters';

import removeDuplicate from '@utils/functions';

const technologies = [
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'PHP',
  'TypeScript',
  'Swift',
  'Go',
  'Kotlin',
  'Rust',
];

const useSearchHandling = (
  positionOrTech: string,
  location: string,
  addRecentSearch: (recentSearch: string) => void,
) => {
  const { filtersDispatch } = useContext(filtersContext);

  const [vacancies, vacanciesService] = useResource<Vacancy>('vacancies');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useFetchResource<Vacancy>(vacanciesService);

  const roles = removeDuplicate(vacancies, 'vacancyRole');

  const handleSearch = () => {
    positionOrTech && addRecentSearch(positionOrTech);
    filtersDispatch(actions.addLocation(location));

    if (technologies.includes(positionOrTech)) {
      filtersDispatch(actions.addTechnology(positionOrTech));
    } else if (roles.includes(positionOrTech)) {
      filtersDispatch(actions.addRole(positionOrTech));
    } else {
      filtersDispatch(actions.addGeralQuery(positionOrTech));
    }

    pathname === '/' && navigate('/vacancies');
  };

  return handleSearch;
};

export default useSearchHandling;
