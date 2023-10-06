import SubHeader from '@components/SubHeader';
import SearchBar from '@components/SearchBar';
import FilterCardContainer from '@components/FilterCardContainer';

import * as S from './styles';

const InitialPage = () => {
  return (
    <S.InitialPage>
      <SubHeader />
      <SearchBar />
      <FilterCardContainer />
    </S.InitialPage>
  );
};

export default InitialPage;
