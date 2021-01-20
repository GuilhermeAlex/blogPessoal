import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  
  {path:'', redirectTo: 'entrar' , pathMatch: 'full'} , /*MÉTODO PARA A PAGINA INICIAL SER ENTRAR  */

  {path:'entrar', component:EntrarComponent } ,
  {path:'cadastrar', component: CadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
