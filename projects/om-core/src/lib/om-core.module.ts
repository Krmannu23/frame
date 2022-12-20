import { NgModule } from '@angular/core';
import { OmCoreComponent } from './om-core.component';
import { FormTextComponent } from './form-text/form-text.component';
import { FormSelectComponent } from './form-select/form-select.component';



@NgModule({
  declarations: [
    OmCoreComponent,
    FormTextComponent,
    FormSelectComponent
  ],
  imports: [
  ],
  exports: [
    OmCoreComponent
  ]
})
export class OmCoreModule { }
