import AuthSubHeader from '@components/AuthSubHeader';
import StepCardContainer from '@components/StepCardContainer';
import LoginForm from '@components/LoginForm';

import * as S from './styles';

const LoginPage = () => {
  return (
    <S.LoginPage data-cy="login-page">
      <AuthSubHeader authLabel="FAÇA SEU LOGIN" />
      <LoginForm />
      <StepCardContainer />
    </S.LoginPage>
  );
};

export default LoginPage;
