import Text from '@components/Text';
import { Message, Person } from '@assets/db.icons';

import * as S from './styles';

type AuthSubHeaderProps = {
  authLabel: string;
};

const AuthSubHeader = ({ authLabel }: AuthSubHeaderProps) => {
  const largerText = (
    <span data-cy="larger-text">
      Fique por dentro <br /> de todas as vagas
    </span>
  );

  return (
    <S.AuthSubHeader data-cy="auth-sub-header">
      <Text label={authLabel} fontSize="medium" fontColor="white" />
      <Text
        label={largerText}
        fontSize="xlarge"
        fontColor="yellow"
        fontWeight="600"
      />
      <div className="text-and-icon first-text-and-icon">
        <Person fill="white" width={24} height={24} />
        <Text
          label="Com um único cadastro você consegue encontrar sua vaga"
          fontColor="white"
        />
      </div>
      <div className="text-and-icon">
        <Message fill="white" width={24} height={24} />
        <Text
          label="Receba alertas sobre as vagas que você procura"
          fontColor="white"
        />
      </div>
    </S.AuthSubHeader>
  );
};

export default AuthSubHeader;
