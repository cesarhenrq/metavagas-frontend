import Chart from '@components/Chart';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';
import useFilters from '@hooks/useFilters';

const CityTechTrendsChart = () => {
  const { filters } = useFilters();

  const url = filters.technologies[0]
    ? `vacancies?technologies=${filters.technologies[0]}`
    : 'vacancies?technologies=React';

  const label = (
    <span>
      Cidades quem mais procuram por{' '}
      <span>{filters.technologies[0] ? filters.technologies[0] : 'React'}</span>
    </span>
  );

  const [vacancies, vacanciesService] = useResource<Vacancy>(`${url}&limit=0`);

  const isLoaded = useFetchResource(vacanciesService, [url]);

  const cityCounts = vacancies.reduce<{ [key: string]: number }>(
    (acc, vacancy) => {
      const city = vacancy.location;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    },
    {},
  );

  const cityData = Object.entries(cityCounts).map(([city, count]) => ({
    name: city.split(',')[0],
    qty: count,
  }));

  cityData.sort((a, b) => b.qty - a.qty);

  cityData.splice(5);

  return <Chart label={label} data={cityData} isLoaded={isLoaded} />;
};

export default CityTechTrendsChart;
