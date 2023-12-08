import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { map, timer } from 'rxjs';

export const onlyNumbers: ValidatorFn = (control: AbstractControl) => {
  const isNumber = !Number.isNaN(Number.parseInt(control.value));
  return isNumber
    ? null
    : { onlyValues: { reason: 'not parsable', value: control.value } };
};

export const checkName = (name: string) => (control: AbstractControl) => {
  return typeof control.value === 'string'
    ? control.value.includes(name)
      ? null
      : { checkName: true }
    : null;
};

export const giftCodeValid: AsyncValidatorFn = (control: AbstractControl) => {
  return timer(2000).pipe(
    map(() => {
      return control.value > 4 ? null : { giftCodeValid: true };
    })
  );
};
