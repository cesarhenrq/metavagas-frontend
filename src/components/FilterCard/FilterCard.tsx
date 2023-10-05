import BaseCard from '@components/BaseCard';
import Text from '@components/Text';
import { Arrow } from '@assets/db.icons';

import * as S from './styles';

type FilterCardProps = {
  filter: string;
  onClick: () => void;
};

const FilterCard = ({ filter, onClick }: FilterCardProps) => {
  return (
    <S.FilterCard className="filter-card" data-cy="filter-card">
      <BaseCard padding="xmedium" borderColor="white">
        <div className="text-container" data-cy="text-container">
          <Text label="Vagas" fontColor="gray" fontSize="xsmall" />
          <Text label={filter} fontSize="medium" />
        </div>
        <Arrow fill="purple-dark" width={24} height={24} onClick={onClick} />
      </BaseCard>
    </S.FilterCard>
  );
};

export default FilterCard;
