import { Component, ElementRef, Inject, Input, OnInit, Optional, ViewChild } from '@angular/core';
import {
  NgModel,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgForm,
} from '@angular/forms';
import { ElementBase } from '../ElementBase'


let formidentifier=0;
@Component({
  selector: 'form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FormTextComponent, multi: true}
  ],
})
export class FormTextComponent  extends ElementBase<string> implements OnInit {
  public identifier = `form-text-${formidentifier++}`;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public isDisable=false;
    @Input() public currency='';
    @Input() public name: string=this.identifier;
    readonly RAND='R';
  
    @ViewChild(NgModel) model: NgModel;
  
  
 
  
  
    constructor(
      
      @Optional() @Inject(NG_VALIDATORS) validators:any[],
      @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: any[],
      elementRef:ElementRef,
      @Optional() public override parentForm:NgForm,
    
    ) {
      super(validators, asyncValidators,elementRef,parentForm);
    }
  ngOnInit(): void {
   this.currency=this.RAND
  }
  }
  
  





