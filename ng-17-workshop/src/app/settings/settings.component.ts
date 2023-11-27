import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AuthService } from '@score/api';
import { map } from 'rxjs';

@Component({
  selector: 'score-settings',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    JsonPipe,
    MatSliderModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export default class SettingsComponent {
  public form: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      rate: 25,
      current: fb.control('', { asyncValidators: this.checkPassword }),
      newPassword: fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(16),
            ],
          ],
          confirm: [
            '',
            [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(16),
            ],
          ],
        },
        { validators: this.matchPassword }
      ),
    });
  }

  matchPassword: ValidatorFn = (control: AbstractControl) =>
    control.value.password === control.value.confirm
      ? null
      : { matchPassword: { equal: false } };

  checkPassword: AsyncValidatorFn = (control: AbstractControl) =>
    this.authService
      .checkPassword(control.value)
      .pipe(
        map((isValid) => (isValid ? null : { checkPassword: { valid: false } }))
      );
}
