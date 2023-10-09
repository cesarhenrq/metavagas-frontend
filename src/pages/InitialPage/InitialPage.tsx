import SubHeader from '@components/SubHeader';
import SearchBar from '@components/SearchBar';
import FilterCardContainer from '@components/FilterCardContainer';

import * as S from './styles';

import RecentVacancies from '@components/RecentVacancies';

const InitialPage = () => {
  return (
    <S.InitialPage>
      <SubHeader />
      <SearchBar />
      <RecentVacancies />
      <FilterCardContainer />
    </S.InitialPage>
  );
};

export default InitialPage;
