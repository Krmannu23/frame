import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() messages: Array<string>;
}


