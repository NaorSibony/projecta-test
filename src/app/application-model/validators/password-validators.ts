import { ValidatorFn, Validators } from '@angular/forms';
import { regexValidator } from './validation-utils';

export interface PasswordValidatorsOptions {
  minNumOfLowerCaseLetters?: number;
  minNumOfUpperCaseLetters?: number;
  minNumOfDigits?: number;
  minNumOfSpecialChars?: number;
  minLength?: number;
}

const regexPlaceHolder = '##';
const lowerCaseStr = `^(.*?[a-z]){${regexPlaceHolder},}.*$`;
const upperCaseStr = `^(.*?[a-z]){${regexPlaceHolder},}.*$`;
const digitStr = `^(.*?\\d){${regexPlaceHolder},}.*$`;
const specialCharStr = `^(.*?[*@!#$%&()^~{}]){${regexPlaceHolder},}.*$`;

export function createPasswordValidators(options: PasswordValidatorsOptions): ValidatorFn[] {
  const passwordValidators: ValidatorFn[] = [Validators.required];

  if (options.minLength) {
    passwordValidators.push(Validators.minLength(options.minLength));
  }
  if (options.minNumOfLowerCaseLetters) {
    const lowerCaseRegex: RegExp = new RegExp(
      lowerCaseStr.replace(regexPlaceHolder, options.minNumOfLowerCaseLetters.toString())
    );
    passwordValidators.push(regexValidator(lowerCaseRegex, { lowercase: '' }));
  }
  if (options.minNumOfLowerCaseLetters) {
    const upperCaseRegex: RegExp = new RegExp(
      upperCaseStr.replace(regexPlaceHolder, options.minNumOfLowerCaseLetters.toString())
    );
    passwordValidators.push(regexValidator(upperCaseRegex, { uppercase: '' }));
  }
  if (options.minNumOfDigits) {
    const digitRegex: RegExp = new RegExp(digitStr.replace(regexPlaceHolder, options.minNumOfDigits.toString()));
    passwordValidators.push(regexValidator(digitRegex, { minDigits: '' }));
  }
  if (options.minNumOfSpecialChars) {
    const specialCharRegex: RegExp = new RegExp(
      specialCharStr.replace(regexPlaceHolder, options.minNumOfSpecialChars.toString())
    );
    passwordValidators.push(regexValidator(specialCharRegex, { specialchar: '' }));
  }

  return passwordValidators;
}
