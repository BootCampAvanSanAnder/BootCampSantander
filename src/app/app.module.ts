import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
