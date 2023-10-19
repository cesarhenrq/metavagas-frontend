import { useContext } from 'react';

import SearchBar from '@components/SearchBar';
import CountryTechTrends from '@components/CountryTechTrends';
import CityTechTrendsChart from '@components/CityTechTrendsChart';
import Filter from '@components/Filter';
import VacancyInfoCard from '@components/VacancyInfoCard';
import LoadingSpinner from '@components/LoadingSpinner';

import { queryContext } from '@contexts/query';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';

import * as S from './styles';
import VacanciesFound from '@components/VacanciesFound';

const VacanciesPage = () => {
  const { query } = useContext(queryContext);

  const url = `vacancies${query && '?' + query}`;

  const [vacancies, vacancyService] = useResource<Vacancy>(url);

  const isLoaded = useFetchResource(vacancyService, [query]);

  return (
    <S.VacanciesPage data-cy="vacancies-page">
      <SearchBar />
      <VacanciesFound allVacancies={'255'} />
      <S.Content>
        <Filter />
        <S.VacancyChartContainer>
          <S.Charts>
            <CountryTechTrends />
            <CityTechTrendsChart />
          </S.Charts>
          <S.Vacancies>
            {vacancies.map(
              ({ id, advertiser, company, wage, technologies, ...props }) =>
                isLoaded ? (
                  <VacancyInfoCard
                    key={id}
                    {...props}
                    company={company.name}
                    advertiser={advertiser.name}
                    wage={String(wage)}
                    technologies={technologies.map(({ techName }) => techName)}
                  />
                ) : (
                  <LoadingSpinner size={100} />
                ),
            )}
          </S.Vacancies>
        </S.VacancyChartContainer>
      </S.Content>
    </S.VacanciesPage>
  );
};

export default VacanciesPage;
