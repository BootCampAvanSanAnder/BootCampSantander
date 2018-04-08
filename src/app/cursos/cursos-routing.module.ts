import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const routes: Routes = [
  { path: '', component: CursosComponent, children:[
    { path: 'novo', component: CursoFormComponent}, 
    { path: ':id', component: CursoDetalheComponent}, 
    { path: ':id/editar', component: CursoDetalheComponent}, 
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
