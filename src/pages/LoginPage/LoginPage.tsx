import AuthSubHeader from '@components/AuthSubHeader';

import * as S from './styles';

const LoginPage = () => {
  return (
    <S.LoginPage data-cy="login-page">
      <AuthSubHeader authLabel="FAÇA SEU LOGIN" />
    </S.LoginPage>
  );
};

export default LoginPage;
