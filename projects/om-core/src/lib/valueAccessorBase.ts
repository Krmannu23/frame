import { ElementRef } from '@angular/core';
import {AsyncValidator, AsyncValidatorFn, ControlValueAccessor, NgForm, Validator, ValidatorFn} from '@angular/forms';


export class ValueAccessorBase<T> implements ControlValueAccessor {
    public innerValue: T;
    private Onchanged = new Array<(value: T) => void>();
    protected touched = false;
    public isDisabled=false;
    public isDirta=false;
    protected touchEvent=new Array<()=>void>()
    constructor(
      validators:Array<Validator | ValidatorFn>,
      asyncValidators:Array<AsyncValidator | AsyncValidatorFn>,
      public elementRef:ElementRef,
      parentForm:NgForm,
      ){
        if(validators && validators.length>0){
          for(let i=0 ;i<validators.length;i++){
            console.log('Hi')
          }
        }
      }

   //get accessor
     get value():T {
      return this.innerValue;
    };
  
  //set accessor including call the onchange callback
     set value(v: T) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.Onchanged.forEach(f => f(v));
      }
  }
  //method for touched array object
  touch() {
    this.touched=true;
    this.touchEvent.forEach((f)=>f());
  }
  
 
  writeValue(value: T) {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void) {
    this.Onchanged.push(fn);//since touch ia an array we will use push method ,agar method rahta to feed karta
  }
   
  registerOnTouched(fn: () => void) {
    this.touchEvent.push(fn);//since touch ia an array we will use push method ,agar method rahta to feed karta
  }
   
 
}