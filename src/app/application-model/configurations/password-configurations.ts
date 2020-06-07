import { PasswordValidatorsOptions } from '../validators/password-validators';

// configure a min num of chars to force on the password on each validation. Please use ositive numbers only.
// To remove a validation, simply remove it from the object and it'll be removed from the display/validation
export const registrationPasswordConfiguration: PasswordValidatorsOptions = {
  minChars: 8,
  minLowerCase: 1,
  minUpperCase: 1,
  minDigits: 1,
  minSpecialChars: 1
};
