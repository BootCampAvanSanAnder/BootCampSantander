import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  /*
    TODO: Criar os elementos de Output
          com o devido decorador mencionado
          no curso.
  */

  /*
    Variáveis de Two-Way-Binding ligados
    aos campos de login para serem enviados
    no evento de Output
  */
  public emailAddress: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

  public sayWelcome(): void {
    console.log('Chamar evento de Output');
  }

}
