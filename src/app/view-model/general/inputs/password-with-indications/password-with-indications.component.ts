import { Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createPasswordValidators, PasswordValidatorsOptions } from '../../../../application-model/validators/password-validators';

export interface PasswordIndication {
  [key: string]: {
    description: string;
    replacementStrategyMethod: (strToReplace: string, replacement: any) => string;
  };
}

export abstract class AbstractPasswordWithIndicationsComponent implements OnInit {
  @Input() passwordControl: FormControl;
  appliedValidationKeys: string[];
  passwordConfiguration: PasswordValidatorsOptions;
  passwordValidations: PasswordIndication;

  constructor() {}

  ngOnInit(): void {
    this.passwordConfiguration = this.getPasswordConfiguration();

    if (!this.passwordConfiguration) {
      throw Error(
        `On 'AbstractPasswordWithIndicationsComponent=>ngOnInit' - Object not properly configured.
        Did you correctly implement 'getPasswordConfiguration'?`
      );
    }
    // filter out unchosen (configured-out) errors
    this.appliedValidationKeys = Object.keys(this.passwordConfiguration);
    this.passwordControl.setValidators(createPasswordValidators(this.passwordConfiguration));
    this.passwordValidations = this.getPasswordIndications();
    if (!this.passwordValidations) {
      throw Error(
        `On 'AbstractPasswordWithIndicationsComponent=>ngOnInit' - Object not properly configured.
        Did you correctly implement 'getPasswordIndications'?`
      );
    }
    this.replaceIndicationValues();
  }

  replaceIndicationValues(): void {
    if (!this.appliedValidationKeys.every((k) => Object.keys(this.passwordValidations).includes(k))) {
      throw Error(
        `On 'AbstractPasswordWithIndicationsComponent=>replaceIndicationValues' - Every applied validaiton
        should have a decribing password validator configuration assigned to it!
        The implementation of 'getPasswordValidations' should be examined against the password's configuration`
      );
    }
    // replace strings in accordance with configuration
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

  // force the implementation of getting these 2 key variables
  abstract getPasswordConfiguration(): PasswordValidatorsOptions;
  abstract getPasswordIndications(): PasswordIndication;
}
