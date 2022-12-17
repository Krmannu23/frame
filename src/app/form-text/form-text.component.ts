import { Component, Inject, Input, OnInit, Optional, ViewChild } from '@angular/core';
import {
  NgModel,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ElementBase } from '../ElementBase';


@Component({
  selector: 'form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FormTextComponent, multi: true}
  ],
})
export class FormTextComponent  extends ElementBase<string> implements OnInit {
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public isDisable=false;
    @Input() public currency='';
    readonly RAND='R';
  
    @ViewChild(NgModel) model: NgModel;
  
  
    public identifier = `form-select-${identifier++}`;
  
  
    constructor(
      @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
      @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
      super(validators, asyncValidators);
    }
  ngOnInit(): void {
   this.currency=this.RAND
  }
  }
  
  
  let identifier = 0;




