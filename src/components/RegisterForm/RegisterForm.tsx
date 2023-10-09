import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useForm, DefaultValues } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema, RegisterFormValues } from './schema';

import { AxiosError } from 'axios';

import Text from '@components/Text';
import Button from '@components/Button';

import useResource from '@hooks/useResource';

import * as S from './styles';

import eye from '@assets/eye-line.png';

const defaultValues: DefaultValues<RegisterFormValues> = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [, candidateService] = useResource<Candidate>('register');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setLoading(true);

    const { email, password } = data;

    const candidate = {
      name: email,
      email,
      password,
      role: 'candidate',
      isActive: true,
    };

    try {
      const response = await candidateService.post(candidate);
      setError(false);
      setNotification('Cadastro realizado com sucesso!');
      setTimeout(() => {
        setNotification('');
      }, 3000);
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

  const handleError = (name: keyof Partial<RegisterFormValues>) => {
    return (
      errors?.[name] && (
        <span className="error-message">{errors[name]?.message}</span>
      )
    );
  };

  return (
    <S.FormContainer
      data-cy="register-form-container"
      className="register-form-container"
      loading={loading}
    >
      <div className="title-container">
        <Text
          label="Faça seu cadastro"
          fontSize="xmedium"
          fontWeight="700"
          fontColor="purple-dark-secondary"
        />
      </div>

      <form data-cy="register-form" onSubmit={handleSubmit(onSubmit)}>
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

        <label htmlFor="confirm-password">Confirmar senha</label>
        <div className="password-wrapper">
          <input
            placeholder="Confirme sua senha"
            type={showPasswordConfirm ? 'text' : 'password'}
            id="confirm-password"
            {...register('confirmPassword')}
            data-cy="password-confirm-input"
          />
          {handleError('confirmPassword')}
          <img
            src={eye}
            alt="eye"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            data-cy="eye-icon"
          />
        </div>

        {notification && (
          <span className={`notification ${error ? 'error' : 'success'}`}>
            {notification}
          </span>
        )}

        <Button label="Cadastrar" type="submit" />
      </form>
      <div className="text-and-link">
        <Text label="Já é cadastrado?" />
        <Link to="/login">Faça o login</Link>
      </div>
    </S.FormContainer>
  );
};

export default RegisterForm;
