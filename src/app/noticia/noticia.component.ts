import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  texto: string = "O curso BootCamp Santander está sendo um sucesso!!";
  url_img: string = "/assets/img/curso.jpg";

  constructor() { }

  ngOnInit() {
  }


}
