import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.scss']
})
export class OutputPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sayHelloToUser(emailAddress: string): void {
    window.alert(`Seja bem-vindo ${emailAddress}!`);
  }

}