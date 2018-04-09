import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public mostrarAlerta(){
    alert("Nós adoramos Angular!!!");
  }

}
