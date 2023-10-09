import AuthSubHeader from '@components/AuthSubHeader';
import StepCardContainer from '@components/StepCardContainer';
import RegisterForm from '@components/RegisterForm';

import * as S from './styles';

const RegisterPage = () => {
  return (
    <S.RegisterPage data-cy="register-page">
      <AuthSubHeader authLabel="CADASTRA-SE" />
      <RegisterForm />
      <StepCardContainer />
    </S.RegisterPage>
  );
};

export default RegisterPage;
