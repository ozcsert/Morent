import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  userEmail: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  userPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must not be less then 8 characters'),
});

export const RegisterSchema = Yup.object().shape({
  userEmail: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  userPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must not be less then 8 characters'),
  userConfirmPassword: Yup.string()
    .oneOf([Yup.ref('userPassword')], 'Password and Repeat Password must match')
    .required('Repeat password is required'),
});
