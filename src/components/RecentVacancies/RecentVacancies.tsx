import Text from '@components/Text';
import * as S from './styles';
import Button from '@components/Button';

import useResource from '@hooks/useResource';
import useFetchResource from '@hooks/useFetchResource';
import VacancyCard from '@components/VacancyCard';
import { useNavigate } from 'react-router-dom';
import { userContext } from '@contexts/user';
import { useContext } from 'react';

const RecentVacancies = () => {
  const [vacancies, vacancyService] = useResource<Vacancy>('vacancies');
  const { user } = useContext(userContext);

  const vacanciesToRender = vacancies
    .sort(function (a: Vacancy, b: Vacancy) {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    })
    .slice(0, 4);

  useFetchResource(vacancyService);

  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <S.Container buttonVisible={Boolean(!user)}>
      <div className="text-container">
        <Text
          label="Vagas mais recentes"
          fontColor="purple-dark"
          fontSize="large"
          fontWeight="600"
        />
      </div>
      <div className="vacancy-container">
        {vacanciesToRender.map(data => (
          <VacancyCard
            key={data.id}
            location={data.location}
            technologies={data.technologies}
            vacancyRole={data.vacancyRole}
          />
        ))}
      </div>
      <div className="button-container">
        <Button
          label="Cadastre-se para ver mais vagas"
          fontWeight="600"
          onClick={() => redirect('/register')}
          borderColor="yellow"
        />
      </div>
    </S.Container>
  );
};

export default RecentVacancies;
