import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "minhaurl.com.br";


  valorAtual: string ="";

  valorSalvo: string = '';

  nomeDoCurso: string = 'Angular';


  getValor(){
    return 5;
  }

  botaoClicado(){
    alert('OPAAAAAAAA QUE ISOOOOOOOOO')
  }

  saiu(event: KeyboardEvent){

    this.valorAtual = (<HTMLInputElement>event.target).value;

  }


  salvar(valor){

    this.valorSalvo = valor;

  }


  constructor() { }

  ngOnInit() {
  }

}
