import AuthSubHeader from '@components/AuthSubHeader';

import * as S from './styles';

const RegisterPage = () => {
  return (
    <S.RegisterPage data-cy="register-page">
      <AuthSubHeader authLabel="CADASTRA-SE" />
    </S.RegisterPage>
  );
};

export default RegisterPage;
