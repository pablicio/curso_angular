import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  nomeDoCliente: string;
  produtos: string[];

  constructor() {
    this.nomeDoCliente = "Thiago Pablício"
    this.produtos = ['arroz', 'feijão', 'biscoito', 'bolacha']
  }

  ngOnInit() {
  }

}
