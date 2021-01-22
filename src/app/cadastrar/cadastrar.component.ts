import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private athService: AuthService,
    private router: Router
  ) { }


  ngOnInit()  {
    window.scroll(0,0)

  }
    confirmSenha(Event: any) {
      this.confirmarSenha = Event.target.value
      
  }
    tipoUser(Event: any){
      this.tipoUsuario = Event.target.value
    }
    cadastrar(){
      this.user.tipo = this.tipoUsuario

      if(this.user.senha !=  this.confirmarSenha){
        alert ('A senhas estão incorretas.')
      }else {
        this.athService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp 
          this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
      }

    }


}
