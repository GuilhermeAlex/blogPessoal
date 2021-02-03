import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[] /*Variavel para criar a lista de postagens do getAllPostagens */

  tema: Tema = new Tema /*Para trazer um tema só */
  listaTemas: Tema[]
  idTema: number

  user: User = new User() 
  idUser = environment.id /*o idUser vai receber o envoironment.id do usuario */


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService:  TemaService, /*Injetando o tema service */
    private authService: AuthService,   /*Injetando a dependencia do service de autenticação */
    private alertas: AlertasService /*Injetando a dependencia do service */
  ) { }

  ngOnInit() {

    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar']) /*estabelecendo a rota para voltar para a pagina entrar quando inspirar a seção */
    }
    this.getAllTemas() /*Toda vez que iniciar ele vai trazer todos os temas */
    this.getAllPostagens() /*Toda vez que iniciar ele vai trazer todos as postagens */
    this.findByIdUser() /*Toda vez que iniciar ele vai trazer id do usuario com suas postagens */
  }
 
  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }
  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
  findByIdUser(){
    this.postagemService.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }

  /*Post de publicar */
  /*O Objeto postagem tem todos os atributos do Postagem.ts */
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema /*O objeto postagem.tema vai receber o tema que está prenchido com o id tema */

    this.user.id = this.idUser /*o user id vai receber o idUser que está no envioronment que é o ID de quem está logado */
    this.postagem.usuario = this.user /*em cima pegou o usuario certo e embaixo passando o usuario certo para a postagem */
  
    /*No método publicar abaixo está chamando o postagemService e passando a postagem unica */
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem =  new Postagem() /*Aqui vai limpar os campos */
      this.getAllPostagens() /*Lista todas as postagens de novo */
    })
  }

}
