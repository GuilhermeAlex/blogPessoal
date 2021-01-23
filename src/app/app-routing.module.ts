import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  
  {path:'', redirectTo: 'entrar' , pathMatch: 'full'} , /*MÉTODO PARA A PAGINA INICIAL SER ENTRAR  */

  {path:'entrar', component:EntrarComponent } ,
  {path:'cadastrar', component: CadastrarComponent} ,
  {path: 'inicio', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
