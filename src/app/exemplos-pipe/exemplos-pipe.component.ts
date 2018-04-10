import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.scss']
})
export class ExemplosPipeComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Angular',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.19,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://angular.io'
  };

  constructor() { }

  ngOnInit() {
  }

}

