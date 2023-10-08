import Text from '@components/Text';
import BaseCard from '@components/BaseCard';

import * as S from './styles';

type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

const StepCard = ({ step, title, description }: StepCardProps) => {
  return (
    <S.StepCard data-cy="step-card">
      <BaseCard
        backgroundColor="purple-dark-secondary"
        borderColor="purple-dark-secondary"
      >
        <Text label={step} fontColor="white" fontSize="medium" />
        <Text label={title} fontColor="yellow" fontSize="medium" />
        <Text label={description} fontColor="white" />
      </BaseCard>
    </S.StepCard>
  );
};

export default StepCard;
