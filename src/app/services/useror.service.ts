import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Useror } from '../models/useror';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserorService {

  private url = `${base_url}/users`;
  private listaCambio = new Subject<Useror[]>();
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Useror[]>(this.url);
  }
  insert(user: Useror) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, user, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setlist(listaNueva: Useror[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
  
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
    return this.http.get<Useror>(`${this.url}/${id}`);
    }

    update(u: Useror) {
      return this.http.put(this.url, u);
      }
}
