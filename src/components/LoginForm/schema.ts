import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('O e-mail é obrigatório')
    .required('E-mail inválido'),
  password: yup.string().required('A senha é obrigatória'),
});

export type LoginFormValues = yup.InferType<typeof schema>;
