import { useState, useEffect } from 'react';

import SearchBar from '@components/SearchBar';
import CountryTechTrends from '@components/CountryTechTrends';
import CityTechTrendsChart from '@components/CityTechTrendsChart';
import Filter from '@components/Filter';
import VacancyInfoCard from '@components/VacancyInfoCard';
import LoadingSpinner from '@components/LoadingSpinner';
import Pagination from '@components/Pagination';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';
import useFilters from '@hooks/useFilters';
import useQuery from '@hooks/useQuery';

import * as S from './styles';
import VacanciesFound from '@components/VacanciesFound';

const VacanciesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { filters } = useFilters();

  const { query } = useQuery();

  const url = query
    ? `vacancies${query && '?' + query}&page=${currentPage}`
    : `vacancies?page=${currentPage}`;

  const [vacancies, vacancyService, vacanciesCount] = useResource<Vacancy>(url);

  const isLoaded = useFetchResource(vacancyService, [
    query,
    currentPage,
    filters.technologies,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <S.VacanciesPage data-cy="vacancies-page">
      <SearchBar />
      <VacanciesFound
        allVacancies={vacanciesCount}
        technology={filters.technologies.join(', ')}
      />
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
          <Pagination
            quantity={vacanciesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </S.VacancyChartContainer>
      </S.Content>
    </S.VacanciesPage>
  );
};

export default VacanciesPage;
