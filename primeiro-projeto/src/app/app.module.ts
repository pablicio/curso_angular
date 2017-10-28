import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro-component/meu-primeiro-component';
import { MeuComponentComponent } from './meu-component/meu-component.component';
import { CursosModule } from "./cursos/cursos.module";
import {TesteComponent} from "./teste/teste.component";
import {ClientesComponent} from "./clientes/clientes.component";



@NgModule({
  declarations: [
    AppComponent,
      MeuPrimeiroComponent,
      MeuComponentComponent,
      TesteComponent,
      ClientesComponent

  ],
  imports: [
    BrowserModule,
      CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
