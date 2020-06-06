import { Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createPasswordValidators, PasswordValidatorsOptions } from '../../../../application-model/validators/password-validators';

export interface PasswordValidationType {
  [key: string]: {
    description: string;
    replacementStrategyMethod: (strToReplace: string, replacement: any) => string;
  };
}

export abstract class AbstractPasswordWithIndicationsComponent implements OnInit {
  @Input() passwordControl: FormControl;
  appliedValidationKeys: string[];
  passwordConfiguration: PasswordValidatorsOptions;
  passwordValidations: PasswordValidationType;

  constructor() {}

  ngOnInit(): void {
    this.passwordConfiguration = this.getPasswordConfiguration();
    // filter out unchosen (configured-out) errors
    this.appliedValidationKeys = Object.keys(this.passwordConfiguration);
    this.passwordControl.setValidators(createPasswordValidators(this.passwordConfiguration));
    this.passwordValidations = this.getPasswordValidations();
    this.setValidationValues();
  }

  setValidationValues(): void {
    if (!this.appliedValidationKeys.every((k) => Object.keys(this.passwordValidations).includes(k))) {
      throw Error('Every applied validaiton should have a decribing password validator configuration assigned to it!');
    }
    // replace strings in accordance to configurations
    Object.keys(this.passwordValidations).forEach((key) => {
      if (this.appliedValidationKeys.includes(key)) {
        const validationError = this.passwordValidations[key];
        validationError.description = validationError.replacementStrategyMethod(
          validationError.description,
          this.passwordConfiguration[key]
        );
      }
    });
  }
  abstract getPasswordConfiguration(): PasswordValidatorsOptions;
  abstract getPasswordValidations(): PasswordValidationType;
}
