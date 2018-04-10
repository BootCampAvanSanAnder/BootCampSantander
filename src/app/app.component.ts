import { Component } from '@angular/core';
import { CepService } from './services/cep.service';
import { CepModel } from './model/cep.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public currentCEP: string;
  public returnedCep: CepModel;

  constructor(
    public cepService: CepService
  ) { }

  public consultarCEP(): void {
    if (!this.currentCEP || (this.currentCEP && this.currentCEP.trim().length <= 0)) {
      this.clearCEP();
      return;
    }

    this.cepService
      .getCEP(this.currentCEP)
      .then((cepResult: CepModel) => {
        this.returnedCep = cepResult;
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      });
  }

  public clearCEP(): void {
    this.returnedCep = undefined;
  }

}
