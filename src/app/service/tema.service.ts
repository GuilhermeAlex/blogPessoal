import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient /*Métodos http */ 
  ) { }

  /* Objeto Token que recebe headers e cria um novo HttpHeaders*/
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token ) /*SET é colocar */
  }
  /*operações do crud GETALL*/
  /*Arrey de Objetos temas [] */
  getAllTema(): Observable<Tema[]>{ /*O Observable serve para dar um retorno no objeto */
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)
  }
  getByIdTema(id:number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`http://localhost:8080/tema/nome/${nome}`, this.token)
  }

  /*operação do crud Post */ 
  /*Esse tema é unicio por isso não tem  Arrey[] */
  postTema(tema: Tema): Observable<Tema>{ /*Esse Observable é de tema unico */
    return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
  }
  /*operação do crud Put */
  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/tema', tema, this.token)
  } 
   /*operação do crud Delete */
   deleteTema(id: number){ /*nessa parte só é necessário o Id pois no back-end faz todo o serviço de deletar */
      return this.http.delete(`http://localhost:8080/tema/${id}`, this.token) /*Nessa parte no front-end tem que colocar crase pq no back-end o id é com parametro*/
   }
}
