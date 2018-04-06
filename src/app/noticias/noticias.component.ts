import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: string[] = ["Noticia 1", "Noticia 2", "Noticia 3", "Noticia 4"];
  mostraNoticia: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public escondeNoticias() {
    this.mostraNoticia = false;
  }

  public mostrarNoticias() {
    this.mostraNoticia = true;
  }

}
