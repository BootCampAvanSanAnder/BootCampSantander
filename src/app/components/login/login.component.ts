import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../service/dummy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public dummyService: DummyService
  ) { }

  ngOnInit() {
  }

  public testDummyService(event) {
    event.preventDefault();
    this.dummyService.makeDummyCall();
  }

}
