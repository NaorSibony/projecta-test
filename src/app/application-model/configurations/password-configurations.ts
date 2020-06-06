import { PasswordValidatorsOptions } from '../validators/password-validators';

export const registrationPasswordConfiguration: PasswordValidatorsOptions = {
  minChars: 8,
  minLowerCase: 1,
  minUpperCase: 1,
  minDigits: 1,
  minSpecialChars: 1
};
