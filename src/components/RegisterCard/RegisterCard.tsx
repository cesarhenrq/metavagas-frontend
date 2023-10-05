import BaseCard from '@components/BaseCard';
import Text from '@components/Text';
import { Person } from '@assets/db.icons';

import * as S from './styles';

const RegisterCard = () => {
  const textLabel = (
    <span>
      Faça seu{' '}
      <a href="http://localhost:3000/__/" data-cy="link">
        cadastro gratuito
      </a>{' '}
      e encontre vagas de acordo com seu perfil.
    </span>
  );

  return (
    <S.RegisterCard className="register-card" data-cy="register-card">
      <BaseCard borderColor="white" padding="small">
        <S.Circle className="circle" data-cy="circle">
          <Person fill="yellow" width={24} height={24} />
        </S.Circle>
        <Text label={textLabel} />
      </BaseCard>
    </S.RegisterCard>
  );
};

export default RegisterCard;
