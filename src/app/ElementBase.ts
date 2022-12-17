import {NgModel} from '@angular/forms';

import {map, Observable} from 'rxjs';

import {ValueAccessorBase} from './valueAcessorBase';

import {
  AsyncValidatorArray,
  ValidatorArray,
  message,
  validate,
  ValidationResult,
} from './validate';

export abstract class ElementBase<T> extends ValueAccessorBase<T> {
    abstract model: NgModel;

  constructor(
    private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray,
  ) {
    super();
  }

  protected validate(): Observable<ValidationResult> {
    return validate
      (this.validators, this.asyncValidators)
      (this.model.control);
  }

   get invalid(): Observable<boolean> {
    return this.validate().pipe(map(v => Object.keys(v || {}).length > 0));
  }

   get failures(): Observable<Array<string>> {
    return this.validate().pipe(map(v => Object.keys(v).map(k => message(v, k))));
  }
}