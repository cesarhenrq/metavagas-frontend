import Text from '@components/Text';
import StepCard from '@components/StepCard';

import * as S from './styles';

const lorem =
  'Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque nulla mauris.';

const steps = [
  {
    step: '01',
    title: 'Crie sua conta',
    description: lorem,
  },
  {
    step: '02',
    title: 'Busque pela sua vaga',
    description: lorem,
  },
  {
    step: '03',
    title: 'Receba sugestões',
    description: lorem,
  },
];

const textLabel = (
  <span>
    Cadastrar na
    <br />
    Meta Vagas é
    <br />
    simples &#128073;
  </span>
);

const StepCardContainer = () => {
  return (
    <S.StepCardContainer data-cy="step-card-container">
      <div className="text-label" data-cy="text-label">
        <Text label={textLabel} fontSize="large" fontWeight="600" />
      </div>

      <div className="step-cards">
        {steps.map(stepCardProps => (
          <StepCard {...stepCardProps} />
        ))}
      </div>
    </S.StepCardContainer>
  );
};

export default StepCardContainer;
