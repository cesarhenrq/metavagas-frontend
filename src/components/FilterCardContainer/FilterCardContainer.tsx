import { useState } from 'react';

import Text from '@components/Text';
import FilterNavigation from '@components/FilterNavigation';
import RegisterCard from '@components/RegisterCard';
import FilterCard from '@components/FilterCard';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';
import useFilterHandling from '@hooks/useFilterHandling';
import useUser from '@hooks/useUser';

import * as S from './styles';

import removeDuplicate from '@utils/functions';

const FilterCardContainer = () => {
  const [activeTab, setActiveTab] = useState('technology');

  const { user } = useUser();

  const [vacancies, vacancyService] = useResource<Vacancy>('vacancies');
  const [technologies, technologyService] =
    useResource<Technology>('technologies');

  const { handleFilter } = useFilterHandling();

  const roles = removeDuplicate(vacancies, 'vacancyRole') as string[];
  const locations = removeDuplicate(vacancies, 'location') as string[];
  const tecnologiesToRender = technologies.map(({ techName }) => techName);

  useFetchResource(vacancyService);
  useFetchResource(technologyService);

  const handleCLick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;
    setActiveTab(id);
  };

  let dataToRender = [];

  switch (activeTab) {
    case 'technology':
      dataToRender = tecnologiesToRender;
      break;
    case 'location':
      dataToRender = locations;
      break;
    case 'roles':
      dataToRender = roles;
      break;
    default:
      dataToRender = tecnologiesToRender;
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
        {!user && <RegisterCard />}
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
