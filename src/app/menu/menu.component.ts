import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  /* recebe o nome do usuario no menu*/
  nome = environment.nome 
  /* recebe a foto do usuario no menu*/
  foto = environment.foto 

  id = environment.id
  


  constructor(
   private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = '' 
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }


}
