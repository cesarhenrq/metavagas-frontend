import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('O e-mail é obrigatório')
    .required('E-mail inválido'),
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não coincidem')
    .required('A confirmação de senha é obrigatória'),
});

export type RegisterFormValues = yup.InferType<typeof schema>;
