import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/commentts';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class CommenttsService {
  private url = `${base_url}/comments`;
  private listaCambio = new Subject<Comment[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Comment[]>(this.url,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
  }
  insert(rec: Comment) {
    let token = sessionStorage.getItem('token');
    console.log("Lista actualizada en el servicio wata:", rec);
    return this.http.post(this.url, rec,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
    

  }
  setlist(listaNueva: Comment[]) {
    console.log("aaaaaaaaaa", listaNueva);
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}
