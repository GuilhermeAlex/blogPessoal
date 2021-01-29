import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']  /* Criando variavel para puxar o parametro id da rota // e recebendo */
    this.findByIdTema(id) /*Recebendo o Id */
  }
  /*O Id está vindo da rota ativa no momento */
  findByIdTema(id:number){ /*Vai pedir o number sempre que iniciar a pagina */
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp /*Inserindo resp no tema */
    })
  }
  /*Parte de atualização de tema */
  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema Atualizado com sucesso')
      this.router.navigate(['/tema'])
    })
  }
}
