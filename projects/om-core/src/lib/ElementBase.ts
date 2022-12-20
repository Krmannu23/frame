import {NgModel, ValidatorFn,Validator, AsyncValidatorFn, AsyncValidator, NgForm} from '@angular/forms';


import {ValueAccessorBase} from '../lib/valueAccessorBase';

import { ElementRef } from '@angular/core';

export abstract class ElementBase<T> extends ValueAccessorBase<T> {
    public abstract model: NgModel;
    protected abstract name:string;

  constructor(
    private validators:(Validator |ValidatorFn)[],
    private asyncValidators: (AsyncValidator |AsyncValidatorFn)[],
    public override elementRef:ElementRef,
    public parentForm:NgForm
  ) {
    super(validators,asyncValidators ,elementRef,parentForm);
  }

  protected reset(){
    this.model.control.reset();
    this.model.control.setValue(null);
    this.model.control.setErrors(null)
    this.model.control.setAsyncValidators(null);
    this.parentForm.controls[this.name].setErrors(null);
    this.parentForm.controls[this.name].reset();
    this.parentForm.controls[this.name].setValue(null);
    this.isDirta=false;
    this.touched=false;
    this.innerValue=null;


  }
}