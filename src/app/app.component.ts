import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder){}
  onSubmit(){
  }
  ngOnInit(){
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email ]]
    })
  }
  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && 
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);

  }
}

