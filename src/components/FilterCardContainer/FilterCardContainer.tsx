import { useState } from 'react';

import Text from '@components/Text';
import FilterNavigation from '@components/FilterNavigation';
import RegisterCard from '@components/RegisterCard';
import FilterCard from '@components/FilterCard';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';
import useFilterHandling from '@hooks/useFilterHandling';

import * as S from './styles';

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

const FilterCardContainer = () => {
  const [activeTab, setActiveTab] = useState('technology');

  const [vacancies, vacancyService] = useResource<Vacancy>('vacancies');
  /* const [technologies, technologyService] =
    useResource<Technology>('technologies'); */

  const { handleFilter } = useFilterHandling();

  const roles = removeDuplicate(vacancies, 'vacancyRole') as string[];
  const locations = removeDuplicate(vacancies, 'location') as string[];

  useFetchResource(vacancyService);
  //useFetchResource(technologyService);

  const handleCLick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;
    setActiveTab(id);
  };

  let dataToRender = [];

  switch (activeTab) {
    case 'technology':
      dataToRender = technologies;
      break;
    case 'location':
      dataToRender = locations;
      break;
    case 'roles':
      dataToRender = roles;
      break;
    default:
      dataToRender = technologies;
  }

  return (
    <S.FilterCardContainer data-cy="filter-card-container">
      <div className="navigation-and-card" data-cy="navigation-and-card">
        <div className="text-and-navigation" data-cy="text-and-navigation">
          <Text
            label="Vagas de emprego em todo Brasil"
            fontColor="yellow"
            fontSize="large"
            fontWeight="600"
          />
          <FilterNavigation activeTab={activeTab} onClick={handleCLick} />
        </div>
        <RegisterCard />
      </div>
      <div className="filter-cards" data-cy={`filter-cards-${activeTab}`}>
        {dataToRender.map(data => (
          <FilterCard
            key={data}
            filter={data}
            onClick={() => handleFilter(activeTab, data)}
          />
        ))}
      </div>
    </S.FilterCardContainer>
  );
};

export default FilterCardContainer;
