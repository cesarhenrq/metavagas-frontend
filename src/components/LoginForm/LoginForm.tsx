import { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useForm, DefaultValues } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema, LoginFormValues } from './schema';

import { AxiosError } from 'axios';

import Text from '@components/Text';
import Button from '@components/Button';

import useResource from '@hooks/useResource';

import { userContext, actions } from '@contexts/user';

import * as S from './styles';

import eye from '@assets/eye-line.png';

type Response = {
  token: string;
  data: {
    name: string;
    email: string;
    isActive: boolean;
  };
};

const defaultValues: DefaultValues<LoginFormValues> = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { userDispatch } = useContext(userContext);

  const navigate = useNavigate();

  const [, userService] = useResource('login');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);

    try {
      const response = (await userService.post(data)) as Response;

      userDispatch(
        actions.setUser({ token: response.token, ...response.data }),
      );

      setError(false);
      setNotification('Login realizado com sucesso!');
      setTimeout(() => {
        setNotification('');
        navigate('/');
      }, 1000);
      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(true);
        setNotification(error.response?.data.message);

        setTimeout(() => {
          setNotification('');
        }, 3000);
      }
    }

    setLoading(false);
  };

  const handleError = (name: keyof Partial<LoginFormValues>) => {
    return (
      errors?.[name] && (
        <span className="error-message">{errors[name]?.message}</span>
      )
    );
  };

  return (
    <S.FormContainer
      data-cy="login-form-container"
      className="login-form-container"
      loading={loading}
    >
      <div className="title-container">
        <Text
          label="Faça seu login"
          fontSize="xmedium"
          fontWeight="700"
          fontColor="purple-dark-secondary"
        />
      </div>

      <form data-cy="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Seu e-mail</label>
        <div className="email-input-wrapper">
          <input
            placeholder="Digite seu e-mail"
            id="email"
            {...register('email')}
            data-cy="email-input"
          />
          {handleError('email')}
        </div>

        <label htmlFor="password">Senha</label>
        <div className="password-wrapper">
          <input
            placeholder="Digite sua senha"
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...register('password')}
            data-cy="password-input"
          />
          {handleError('password')}
          <img
            src={eye}
            alt="eye"
            onClick={() => setShowPassword(!showPassword)}
            data-cy="eye-icon"
          />
        </div>

        {notification && (
          <span className={`notification ${error ? 'error' : 'success'}`}>
            {notification}
          </span>
        )}

        <Button label="Entrar" type="submit" />
      </form>
      <div className="text-and-link">
        <Text label="Não é cadastrado?" />
        <Link to="/register">Cadastre-se gratuitamente</Link>
      </div>
    </S.FormContainer>
  );
};

export default LoginForm;
