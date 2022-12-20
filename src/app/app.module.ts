import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OmCoreModule } from 'projects/om-core/src/lib/om-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OmCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
