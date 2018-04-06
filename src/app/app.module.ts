import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'input', component: InputPageComponent },
  { path: 'output', component: OutputPageComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileCardComponent,
    InputPageComponent,
    OutputPageComponent,
    HomePageComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
