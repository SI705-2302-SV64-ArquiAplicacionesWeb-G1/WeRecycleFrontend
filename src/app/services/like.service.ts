import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Like } from '../models/like';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private url = `${base_url}/likes`;
  private listaCambio = new Subject<Like[]>();
  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem('token');
    console.log("nose");
    return this.http.get<Like[]>(this.url,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
  }
  insert(like: Like) {
    let token = sessionStorage.getItem('token');
    console.log("Lista actualizada en el servicio wata:", like);
    return this.http.post(this.url, like,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
  }

  setlist(listaNueva: Like[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}
