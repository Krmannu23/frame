import {ControlValueAccessor} from '@angular/forms';


export class ValueAccessorBase<T> implements ControlValueAccessor {
    private innerValue!: T;
    private Onchanged = new Array<(value: T) => void>();
    private touched = new Array<() => void>();
    public isDisabled:boolean;

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
    this.touched.forEach(f => f());
  }
  
 
  writeValue(value: T) {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void) {
    this.Onchanged.push(fn);//since touch ia an array we will use push method ,agar method rahta to feed karta
  }
   
  registerOnTouched(fn: () => void) {
    this.touched.push(fn);//since touch ia an array we will use push method ,agar method rahta to feed karta
  }
   
 
}