import * as yup from "yup";

const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required'),
  lastName: yup
    .string()
    .required('Last name is required'),
  email: yup
    .string()
    .email()
    .required('Email is required'),
  password: yup
    .string()
    .min(8)
    .required('Password is required'),
  age: yup
    .number()
    .min(18)
    .required('Age is required'),
});
