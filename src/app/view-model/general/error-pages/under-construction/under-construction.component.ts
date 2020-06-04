import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registrationPasswordConfiguration } from '../../../../application-model/configurations/password-configurations';
import { emailRegex } from '../../../../application-model/validators/common-validators';
import { createPasswordValidators } from '../../../../application-model/validators/password-validators';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', createPasswordValidators(registrationPasswordConfiguration)]
    });
  }
}
