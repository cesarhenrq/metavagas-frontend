import Text from '@components/Text';
import { Computer, Location, Suitcase } from '@assets/db.icons';

import * as S from './styles';

type FilterNavigationProps = {
  activeTab: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const FilterNavigation = ({ activeTab, onClick }: FilterNavigationProps) => {
  return (
    <S.FilterNavigation
      className="filter-navigation"
      data-cy="filter-navigation"
    >
      <S.FilterNavigationItem
        className="filter-navigation-item"
        data-cy="filter-navigation-tecnology"
        id="tecnology"
        onClick={onClick}
        active={activeTab === 'tecnology'}
      >
        <Computer
          fill="white"
          width={24}
          height={24}
          active={activeTab === 'tecnology'}
        />
        <Text label="Tecnologia" fontColor="white" fontSize="medium" />
      </S.FilterNavigationItem>
      <S.FilterNavigationItem
        className="filter-navigation-item"
        data-cy="filter-navigation-location"
        id="location"
        onClick={onClick}
        active={activeTab === 'location'}
      >
        <Location
          fill="white"
          width={24}
          height={24}
          active={activeTab === 'location'}
        />
        <Text label="Cidades" fontColor="white" fontSize="medium" />
      </S.FilterNavigationItem>
      <S.FilterNavigationItem
        className="filter-navigation-item"
        data-cy="filter-navigation-job"
        id="job"
        onClick={onClick}
        active={activeTab === 'job'}
      >
        <Suitcase
          fill="white"
          width={24}
          height={24}
          active={activeTab === 'job'}
        />
        <Text label="Cargos" fontColor="white" fontSize="medium" />
      </S.FilterNavigationItem>
    </S.FilterNavigation>
  );
};

export default FilterNavigation;
