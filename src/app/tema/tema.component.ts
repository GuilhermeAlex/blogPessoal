import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router /*Injetando a dependencia do router */
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar']) /* serve para quando o token estiver vazio ele fechar a aba e ir pro entrar */ 
    }
  }
  
  
}
