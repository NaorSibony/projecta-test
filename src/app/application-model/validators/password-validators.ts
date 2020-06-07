import { ValidatorFn } from '@angular/forms';
import { strReplacementPlaceHolder } from '../common/global-constants';
import { regexValidator } from './validation-utils';

export interface PasswordValidatorsOptions {
  minLowerCase?: number;
  minUpperCase?: number;
  minDigits?: number;
  minSpecialChars?: number;
  minChars?: number;
}

const minCharsStr = `^.{${strReplacementPlaceHolder},}$`;
const lowerCaseStr = `^(.*?[a-z]){${strReplacementPlaceHolder},}.*$`;
const upperCaseStr = `^(.*?[A-Z]){${strReplacementPlaceHolder},}.*$`;
const digitStr = `^(.*?\\d){${strReplacementPlaceHolder},}.*$`;
const specialCharStr = `^(.*?[*@!#$%&()^~{}]){${strReplacementPlaceHolder},}.*$`;

export function createPasswordValidators(options: PasswordValidatorsOptions): ValidatorFn[] {
  const passwordValidators: ValidatorFn[] = [];

  // todo? - see if we can generalize with a loop
  // - chose not to, in order to keep decoupling and allow easier future changes
  if (options.minChars) {
    const minCharsRegex: RegExp = new RegExp(minCharsStr.replace(strReplacementPlaceHolder, options.minChars.toString()));
    passwordValidators.push(regexValidator(minCharsRegex, { minChars: true }));
  }
  if (options.minLowerCase) {
    const lowerCaseRegex: RegExp = new RegExp(lowerCaseStr.replace(strReplacementPlaceHolder, options.minLowerCase.toString()));
    passwordValidators.push(regexValidator(lowerCaseRegex, { minLowerCase: true }));
  }
  if (options.minUpperCase) {
    const upperCaseRegex: RegExp = new RegExp(upperCaseStr.replace(strReplacementPlaceHolder, options.minUpperCase.toString()));
    passwordValidators.push(regexValidator(upperCaseRegex, { minUpperCase: true }));
  }
  if (options.minDigits) {
    const digitRegex: RegExp = new RegExp(digitStr.replace(strReplacementPlaceHolder, options.minDigits.toString()));
    passwordValidators.push(regexValidator(digitRegex, { minDigits: true }));
  }
  if (options.minSpecialChars) {
    const specialCharRegex: RegExp = new RegExp(specialCharStr.replace(strReplacementPlaceHolder, options.minSpecialChars.toString()));
    passwordValidators.push(regexValidator(specialCharRegex, { minSpecialChars: true }));
  }

  return passwordValidators;
}
