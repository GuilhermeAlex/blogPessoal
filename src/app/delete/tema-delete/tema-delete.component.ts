import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
  idTema: number /*Transformando a variavel id tema em uma variavel para ser usada por todos os métodos */

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
   this.idTema = this.route.snapshot.params['id'] /*Pegando o Id da rota ativa no momento */
    this.findByIdTema(this.idTema)
  }
  /*Fazendo a conexão do id com findByIdTema  */
  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema= resp
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(()=>{ /*o subscribe está vazio pq ele não tem um objeto para puxar e apagar */
      alert('Tema apagado com sucesso')
      this.router.navigate(['/tema'])
    })
  }

}
