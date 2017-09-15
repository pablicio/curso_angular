import { Component, OnInit } from '@angular/core';
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: String[];

  constructor(cursosServices: CursosService) {

    this.cursos = cursosServices.getCursos();

    this.nomePortal = "pabliciotjg.solucoes.com.br";
  }

  ngOnInit() {
  }

}
