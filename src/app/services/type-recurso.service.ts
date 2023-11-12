import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TypeRecurso } from '../models/typerecurso';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class TypeRecursoService {

  private url = `${base_url}/TypeRecursoController`;
  private Listacambio = new Subject<TypeRecurso[]>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<TypeRecurso[]>(this.url);
  }

  insert(camp: TypeRecurso) {
    return this.http.post(this.url, camp);
  }

  setList(listaNueva: TypeRecurso[]) {
    this.Listacambio.next(listaNueva);
  }

  getList() {
    return this.Listacambio.asObservable();
  }
}
