import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../models/roles';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private url = `${base_url}/typeusers`;
  private listaCambio = new Subject<Roles[]>();
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Roles[]>(this.url);
  }
  insert(rol: Roles) {
    return this.http.post(this.url, rol);
  }

  setlist(listaNueva: Roles[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}
