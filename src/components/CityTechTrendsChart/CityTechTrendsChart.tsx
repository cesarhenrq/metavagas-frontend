import { useContext } from 'react';

import Chart from '@components/Chart';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';

import { filtersContext } from '@contexts/filters';

const CityTechTrendsChart = () => {
  const { filters } = useContext(filtersContext);

  const url = filters.technologies[0]
    ? `vacancies?technologies=${filters.technologies[0]}`
    : 'vacancies?technologies=React';

  const label = (
    <span>
      Cidades quem mais procuram por{' '}
      <span>{filters.technologies[0] ? filters.technologies[0] : 'React'}</span>
    </span>
  );

  const [vacancies, vacanciesService] = useResource<Vacancy>(url);

  useFetchResource(vacanciesService, [url]);

  const cityCounts = vacancies.reduce<{ [key: string]: number }>(
    (acc, vacancy) => {
      const city = vacancy.location;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    },
    {},
  );

  const cityData = Object.entries(cityCounts).map(([city, count]) => ({
    name: city,
    qty: count,
  }));

  cityData.sort((a, b) => b.qty - a.qty);

  return <Chart label={label} data={cityData} />;
};

export default CityTechTrendsChart;
