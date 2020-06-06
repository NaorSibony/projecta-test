import { Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  createPasswordValidators,
  PasswordValidatorsOptions
} from '../../../../application-model/validators/password-validators';

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
    this.appliedValidationKeys = Object.keys(this.passwordConfiguration);
    this.passwordControl.setValidators(createPasswordValidators(this.passwordConfiguration));
    this.passwordValidations = this.getPasswordValidations();
    this.setValidationErrorValues();
  }

  setValidationErrorValues(): void {
    // filter out unchosen (configured-out) errors + replace strings in accordance to configurations
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
