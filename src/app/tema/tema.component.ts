import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  /*Instanciando objetos */
  tema: Tema =  new Tema() /* criando Objeto tema */
  listaTemas: Tema[] /*Vai trazer uma lista de temas */
  constructor(
    private router: Router, /*Injetando a dependencia do router */
    private temaService: TemaService /*Injetando a dependencia do tema service */
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar']) /* serve para quando o token estiver vazio ele fechar a aba e ir pro entrar */ 
    }
    /*Todas as vezes que iniciar a pagina vai mostrar todos os temas */
    this.findAllTemas() 
  }

  /*Procure todos os temas e Mostre na tela em lista quando iniciar a pagina */
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  /*Cadasyto dos Temas */
  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=> {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas() /*Chamando o finAllTemas para mostrar a lista atualizada no momento do cadastro */
      this.tema = new Tema() /*Aqui é o método para zerar o campo após o cadastro para poder cadastrar outro caso o usuario queira */    
    })
    }
  
}
