import AuthSubHeader from '@components/AuthSubHeader';
import StepCardContainer from '@components/StepCardContainer';

import * as S from './styles';

const LoginPage = () => {
  return (
    <S.LoginPage data-cy="login-page">
      <AuthSubHeader authLabel="FAÇA SEU LOGIN" />
      <StepCardContainer />
    </S.LoginPage>
  );
};

export default LoginPage;
