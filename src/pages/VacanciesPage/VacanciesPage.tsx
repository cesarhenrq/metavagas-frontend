import SearchBar from '@components/SearchBar';

import * as S from './styles';

const VacanciesPage = () => {
  return (
    <S.VacanciesPage data-cy="vacancies-page">
      <SearchBar />
    </S.VacanciesPage>
  );
};

export default VacanciesPage;
