import * as yup from 'yup';

export const formSchema = yup.object().shape({
  firstName: yup.string().required('First Name should be required please'),
  lastName: yup.string().required('Last Name should be required please'),
  email: yup.string().email().required('Correct email is required please'),
  age: yup.number().integer().positive().required(),
  password: yup.string().min(6).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], null),
});
