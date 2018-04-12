import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.scss']
})
export class FormTemplateDrivenComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(Form) {
  }

  ngOnInit() {
  }

}

