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
        id="technology"
        onClick={onClick}
        active={activeTab === 'technology'}
      >
        <Computer
          fill="white"
          width={24}
          height={24}
          active={activeTab === 'technology'}
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
        id="roles"
        onClick={onClick}
        active={activeTab === 'roles'}
      >
        <Suitcase
          fill="white"
          width={24}
          height={24}
          active={activeTab === 'roles'}
        />
        <Text label="Cargos" fontColor="white" fontSize="medium" />
      </S.FilterNavigationItem>
    </S.FilterNavigation>
  );
};

export default FilterNavigation;
