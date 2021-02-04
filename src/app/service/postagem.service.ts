import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  user: User = new User()

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
  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/postagens/${id}`, this.token)
  }
  
  getByTituloPostagem(titulo: string): Observable<Postagem[]>{ /*Vai retornar varias postagens */
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/titulo/${titulo}`,this.token) /*Passando o titulo por parametro pela rota */
  }
  
  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{ /*Quando é só 1 objeto não preisa do arrey */
    return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)

  }
  /*operações do crud put para postagem*/
  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('http://localhost:8080/postagens', postagem, this.token)
  }
  /*operações do crud delete para postagem*/
  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
  }

}
