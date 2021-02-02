import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient /*Métodos http */
  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
   /*operações do crud Get e Post para postagem*/
  /*Arrey de Objetos postagem [] */
  getAllPostagens(): Observable<Postagem[]> { /*O Observable serve para dar um retorno no objeto */
    return this.http.get<Postagem[]>('http://localhost:8080/postagens', this.token)
  } 
  postPostagem(postagem: Postagem) : Observable<Postagem>{ /*Quando é só 1 objeto não preisa do arrey */
    return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)

  }



}
