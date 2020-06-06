import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegex } from '../../../application-model/validators/common-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['']
    });
  }

  get emailControl(): AbstractControl {
    return this.registrationForm.get('email');
  }

  get passwordControl(): AbstractControl {
    return this.registrationForm.get('password');
  }

  submit(): void {
    if (this.registrationForm.valid) {
      // submit the form to the server
    }
  }
}
