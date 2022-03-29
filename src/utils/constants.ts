import * as yup from 'yup';
import { Field } from '../components/organisms/Form';

export const TOAST_DURATION = 3000;

export const POST_LIMIT_PER_REQUEST = 10;

export const AVAILABLE_COLORS = ['black', 'red', 'purple', 'green', 'grey', 'blue', 'brown'];

export const LOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};

export const DefaultStackOptions = { headerShown: false };

export const SignUpForm: Field[] = [
  { placeholder: 'Username', name: 'username' },
  { placeholder: 'E-mail', name: 'email' },
  {
    placeholder: 'Password',
    name: 'password',
    type: 'password',
  },
  {
    placeholder: 'Confirm password',
    name: 'passwordConfirmation',
    type: 'password',
  },
];

export const SignInForm: Field[] = [
  { placeholder: 'Username', name: 'username' },
  {
    placeholder: 'Password',
    name: 'password',
    type: 'password',
  },
];

export const SignInValidationSchema = yup.object().shape({
  username: yup.string().required('You must provide an username.'),
  password: yup.string().required('You must provide a password.'),
});

export const SignUpValidationSchema = yup.object().shape({
  username: yup.string().required('You must provide an username.'),
  email: yup
    .string()
    .email('This is not a valid e-mail')
    .required('You must provide an e-mail.'),
  password: yup.string().required('You must provide a password.'),
  passwordConfirmation: yup
    .string()
    .required('You must provide a password confirmation.')
    .oneOf([yup.ref('password'), null], 'Your passwords don\'t match.'),
});
