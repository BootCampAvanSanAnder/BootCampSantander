import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent implements OnInit {

  sobrenome: string = "";

  constructor() { }

  ngOnInit() {
  }

}
