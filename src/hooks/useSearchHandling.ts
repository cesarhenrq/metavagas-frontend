import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const { filters, filtersDispatch } = useContext(filtersContext);

  console.log(filters);

  const [vacancies, vacanciesService] = useResource<Vacancy>('vacancies');

  const navigate = useNavigate();

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

    navigate('/vacancies');
  };

  return handleSearch;
};

export default useSearchHandling;
