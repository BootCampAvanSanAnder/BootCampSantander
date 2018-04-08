import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoFormComponent,
    CursoDetalheComponent
  ]
})
export class CursosModule { }
