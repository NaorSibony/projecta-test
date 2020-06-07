import { Component } from '@angular/core';
import { strReplacementPlaceHolder } from '../../../../application-model/common/global-constants';
import { registrationPasswordConfiguration } from '../../../../application-model/configurations/password-configurations';
import { PasswordValidatorsOptions } from '../../../../application-model/validators/password-validators';
import { AbstractPasswordWithIndicationsComponent, PasswordIndication } from './password-with-indications.component';

function replaceMinNum(strToReplace: string, replacement: number): string {
  return strToReplace.replace(strReplacementPlaceHolder, `${replacement}+`);
}

@Component({
  selector: 'app-registration-password',
  templateUrl: './password-with-indications.component.html',
  styleUrls: ['./password-with-indications.component.scss']
})
export class RegistrationPasswordComponent extends AbstractPasswordWithIndicationsComponent {
  getPasswordConfiguration(): PasswordValidatorsOptions {
    return registrationPasswordConfiguration;
  }

  getPasswordIndications(): PasswordIndication {
    return {
      minChars: {
        description: `${strReplacementPlaceHolder} characters`,
        replacementStrategyMethod: replaceMinNum
      },

      minLowerCase: {
        description: `${strReplacementPlaceHolder} lowercase letters`,
        replacementStrategyMethod: replaceMinNum
      },

      minUpperCase: {
        description: `${strReplacementPlaceHolder} uppercase letters`,
        replacementStrategyMethod: replaceMinNum
      },

      minDigits: {
        description: `${strReplacementPlaceHolder} digits`,
        replacementStrategyMethod: replaceMinNum
      },
      minSpecialChars: {
        description: `${strReplacementPlaceHolder} special characters`,
        replacementStrategyMethod: replaceMinNum
      }
    };
  }
}
