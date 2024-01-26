import * as yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required'),
  lastName: yup
    .string()
    .required('Last name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Invalid email'),
  password: yup
    .string()
    .min(8)
    .required('Password is required'),
  age: yup
    .number()
    .min(18)
    .required('Age is required'),
});
