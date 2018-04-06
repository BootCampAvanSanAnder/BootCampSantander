import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const appRouters: Routes = [
    { path: 'cursos', component: CursosComponent}, 
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRouters
    )],
    exports: [RouterModule]
})
export class AppRoutingModule{}
