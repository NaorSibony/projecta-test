import { PasswordValidatorsOptions } from '../validators/password-validators';

export const registrationPasswordConfiguration: PasswordValidatorsOptions = {
  minLength: 8,
  minNumOfDigits: 1,
  minNumOfLowerCaseLetters: 1,
  minNumOfSpecialChars: 1,
  minNumOfUpperCaseLetters: 1
};
