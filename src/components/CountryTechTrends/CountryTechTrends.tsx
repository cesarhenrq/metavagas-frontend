import Chart from '@components/Chart';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';

const CountryTechTrends = () => {
  const [vacancies, vacanciesService] =
    useResource<Vacancy>('vacancies?limit=0');

  const isLoaded = useFetchResource(vacanciesService);

  const label = (
    <span>
      Tecnologias mais procuradas em <span>Brasil</span>
    </span>
  );

  const allTechnologies = vacancies.reduce<string[]>((acc, vacancy) => {
    vacancy.technologies.forEach(tech => {
      acc.push(tech.tecName);
    });
    return acc;
  }, []);

  const technologyCount = allTechnologies.reduce<{ [key: string]: number }>(
    (acc, techName) => {
      acc[techName] = (acc[techName] || 0) + 1;
      return acc;
    },
    {},
  );

  const mostUsedTechnologies = Object.keys(technologyCount).map(techName => ({
    name: techName,
    qty: technologyCount[techName],
  }));

  mostUsedTechnologies.sort((a, b) => b.qty - a.qty);

  const top5Technologies = mostUsedTechnologies.slice(0, 5);

  return <Chart label={label} data={top5Technologies} isLoaded={isLoaded} />;
};

export default CountryTechTrends;
