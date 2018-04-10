import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
