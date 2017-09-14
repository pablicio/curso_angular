import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro-component/meu-primeiro-component';
import { MeuComponentComponent } from './meu-component/meu-component.component';



@NgModule({
  declarations: [
    AppComponent,
      MeuPrimeiroComponent,
      MeuComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
