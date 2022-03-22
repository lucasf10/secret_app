import { Field } from '../components/organisms/Form';

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
