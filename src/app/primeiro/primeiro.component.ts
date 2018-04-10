import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.scss']
})
export class PrimeiroComponent implements OnInit {

  nome: string = "";

  constructor() { }

  ngOnInit() {
  }

  public atualizaNome(nomeAtual: Event): void {
    this.nome = (<HTMLInputElement>nomeAtual.target).value;
  }

}
