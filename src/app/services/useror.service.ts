import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Useror } from '../models/useror';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserorService {

  private url = `${base_url}/typeusers`;
  private listaCambio = new Subject<Useror[]>();
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Useror[]>(this.url);
  }
  insert(user: Useror) {
    return this.http.post(this.url, user);
  }

  setlist(listaNueva: Useror[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}
