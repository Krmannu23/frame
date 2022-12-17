import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullframework';
  public name:string='';
  public email:string='';
  public number:string='';

  Submit(data:NgForm){
    console.log(data.value)
  }
  
}
